import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Bath,
  BedDouble,
  Briefcase,
  Building2,
  CalendarDays,
  Car,
  CircleCheckBig,
  FerrisWheel,
  Gift,
  HandCoins,
  HandHelping,
  Handshake,
  Heart,
  House,
  LogIn,
  Lock,
  Map,
  MapPin,
  Menu,
  Moon,
  PartyPopper,
  Salad,
  ShieldCheck,
  ShoppingBag,
  Smile,
  Soup,
  Sparkles,
  Star,
  Sun,
  Timer,
  User,
  UserRoundPlus,
  Users,
  Users2,
  Utensils,
  WandSparkles,
  Wifi,
  Wine,
  Wrench,
} from 'lucide-react';

// API base for backend requests. Read from Vite env (VITE_API_BASE).
// Defaults to '/api' so the bundled serverless functions at /api/* are used when deployed.
const apiBase = '/api';

const checkoutImproveOptions = [
  { label: 'Amenities', icon: Bath },
  { label: 'Room setup', icon: WandSparkles },
  { label: 'Food options', icon: Salad },
  { label: 'Wi-Fi', icon: Wifi },
  { label: 'Faster service', icon: Timer },
  { label: 'Parking', icon: Car },
];

const checkoutFutureOptions = [
  { label: 'More amenities', icon: Sparkles },
  { label: 'Family options', icon: UserRoundPlus },
  { label: 'Better dining', icon: Wine },
  { label: 'Local guide tips', icon: Map },
  { label: 'Events', icon: PartyPopper },
  { label: 'Loyalty offers', icon: Gift },
];

const visitReasonOptions = [
  { label: 'Business', icon: Briefcase },
  { label: 'Leisure', icon: Sun },
  { label: 'Both', icon: Sparkles },
];

const visitingWithOptions = [
  { label: 'Solo', icon: User },
  { label: 'Family', icon: Users },
  { label: 'Partner', icon: Heart },
  { label: 'Business partner', icon: Handshake },
  { label: 'Friends', icon: Users2 },
];

const overallExperienceOptions = [
  { label: 'Excellent', icon: Star },
  { label: 'Good', icon: Smile },
  { label: 'Okay', icon: CircleCheckBig },
  { label: 'Needs improvement', icon: Wrench },
];

const landingCards = [
  {
    title: 'Review check-in',
    description: 'Arrival details for your visit in a few simple steps.',
    icon: LogIn,
    meta: '1 minute',
    action: 'checkin',
  },
  {
    title: 'Review check-out',
    description: 'Share your stay experience and help us improve.',
    icon: HandHelping,
    meta: 'Quick feedback',
    action: 'checkout',
  },
];

const initialCheckIn = {
  guestName: '',
  anonymous: false,
  from: '',
  stayReason: '',
  visitingWith: '',
  purpose: '',
  eventName: '',
  otherPurpose: '',
};

const initialCheckOut = {
  overall: '',
  propertyFocus: [],
  liked: [],
  improve: [],
  future: [],
  note: '',
};

// Use the public asset placed in frontend/public. If you add a JPEG, update this path accordingly.
const heroBackground = 'url(/hotel.jpg)';

function App() {
  const [route, setRoute] = useState(window.location.pathname === '/admin' ? 'admin' : 'guest');
  const [view, setView] = useState('home');
  const [adminAuthed, setAdminAuthed] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [checkInStep, setCheckInStep] = useState(0);
  const [checkOutStep, setCheckOutStep] = useState(0);
  const [checkIn, setCheckIn] = useState(initialCheckIn);
  const [checkOut, setCheckOut] = useState(initialCheckOut);
  const [records, setRecords] = useState([]);
  const [adminTab, setAdminTab] = useState('all');
  const [adminFilters, setAdminFilters] = useState({ startDate: '', endDate: '', granularity: 'day' });
  const [status, setStatus] = useState('');
  const [loadingAdmin, setLoadingAdmin] = useState(false);

  useEffect(() => {
    const onPopState = () => {
      const isAdmin = window.location.pathname === '/admin';
      setRoute(isAdmin ? 'admin' : 'guest');
      if (!isAdmin) setView('home');
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (route === 'admin' && adminAuthed) loadAdmin();
  }, [route]);

  const filteredRecords = useMemo(() => {
    // base filter by tab
    let list = adminTab === 'all' ? records : records.filter((record) => record.type === adminTab);
    // apply date range filter if present
    const { startDate, endDate } = adminFilters;
    if (startDate) {
      const s = new Date(startDate);
      list = list.filter((r) => new Date(r.createdAt) >= s);
    }
    if (endDate) {
      const e = new Date(endDate);
      // include the entire day
      e.setHours(23,59,59,999);
      list = list.filter((r) => new Date(r.createdAt) <= e);
    }
    return list;
  }, [records, adminTab, adminFilters]);

  const adminKpis = useMemo(() => {
    const total = filteredRecords.length;
    const checkins = filteredRecords.filter((r) => r.type === 'checkin').length;
    const checkouts = filteredRecords.filter((r) => r.type === 'checkout').length;
    const guests = new Set();
    let business = 0;
    let leisure = 0;
    let anonymous = 0;
    filteredRecords.forEach((r) => {
      const p = r.payload || {};
      if (p.guestName) guests.add(p.guestName.trim());
      if (p.anonymous) anonymous += 1;
      const sr = (p.stayReason || '').toLowerCase();
      if (sr === 'business') business += 1;
      if (sr === 'leisure') leisure += 1;
      // also check purpose keywords
      const purpose = (p.purpose || '').toLowerCase();
      if (!business && purpose.includes('conference')) business += 1;
      if (!leisure && purpose.includes('leisure')) leisure += 1;
    });
    return {
      total,
      checkins,
      checkouts,
      uniqueGuests: guests.size,
      business,
      leisure,
      anonymous,
    };
  }, [filteredRecords]);

  const originSuggestionsList = useMemo(() => {
    const raw = checkIn.from.trim().toLowerCase();
    if (!raw) return [];
    const direct = Object.entries(originSuggestions).find(([key]) => raw.includes(key));
    if (direct) return direct[1];
    const simple = checkIn.from.trim();
    return [`${simple}`, `${simple}, USA`, `${simple}, India`];
  }, [checkIn.from]);

  function goGuestHome() {
    window.history.pushState({}, '', '/');
    setRoute('guest');
    setView('home');
    setStatus('');
    setAdminAuthed(false);
  }

  function startFlow(nextView) {
    setStatus('');
    setView(nextView);
    setCheckInStep(0);
    setCheckOutStep(0);
  }

  function resetCheckIn() {
    setCheckIn(initialCheckIn);
    setCheckInStep(0);
  }

  function resetCheckOut() {
    setCheckOut(initialCheckOut);
    setCheckOutStep(0);
  }

  function handleOriginSuggestion(suggestion) {
    setCheckIn((prev) => ({ ...prev, from: suggestion }));
  }

  function toggleArrayValue(setter, key, value, max = 3) {
    setter((prev) => {
      const exists = prev[key].includes(value);
      const next = exists
        ? prev[key].filter((item) => item !== value)
        : [...prev[key], value].slice(0, max);

      return { ...prev, [key]: next };
    });
  }

  async function submitFlow(type) {
    const payload = type === 'checkin' ? checkIn : checkOut;

    try {
      const response = await fetch(`${apiBase}/submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, payload }),
      });

      if (!response.ok) throw new Error('Unable to save form.');

      setStatus(type === 'checkin' ? 'Your check-in is complete.' : 'Your check-out review is complete.');

      if (type === 'checkin') resetCheckIn();
      else resetCheckOut();

      setView('done');
    } catch (error) {
      setStatus(error.message);
    }
  }

  async function loadAdmin() {
    setLoadingAdmin(true);

    try {
      const response = await fetch(`${apiBase}/submissions`);
      if (!response.ok) throw new Error('Unable to load records.');

      const data = await response.json();
      setRecords(data.records || []);
      setStatus('');
    } catch (error) {
      setStatus(error.message);
    } finally {
      setLoadingAdmin(false);
    }
  }

  if (route === 'admin') {
    if (!adminAuthed) {
      return (
        <>
          <StyleOverrides />
          <div className="admin-shell app-modern-shell">
            <main className="admin-page">
              <section className="glass-card empty-state admin-surface" style={{ maxWidth: 560, margin: '40px auto', textAlign: 'center' }}>
                <h2>Admin access</h2>
                <p className="subtle-copy">Enter the 4-digit PIN to view admin analytics.</p>
                <div style={{ marginTop: 18, display: 'flex', gap: 8, justifyContent: 'center' }}>
                  <input
                    type="password"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="Enter PIN"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid rgba(15,23,42,0.06)', width: 160 }}
                  />
                  <button
                    className="primary-button"
                    onClick={() => {
                      if (adminPassword === '7311') {
                        setAdminAuthed(true);
                        setAdminPassword('');
                        setStatus('');
                        loadAdmin();
                      } else {
                        setStatus('Invalid PIN.');
                      }
                    }}
                    type="button"
                  >
                    Unlock
                  </button>
                </div>

                <div style={{ marginTop: 12 }}>
                  <button className="ghost-button" onClick={goGuestHome} type="button">Return to guest view</button>
                </div>
                {status && <p className="status-line" style={{ marginTop: 12 }}>{status}</p>}
              </section>
            </main>
          </div>
        </>
      );
    }

    return (
      <>
        <StyleOverrides />
        <div className="admin-shell app-modern-shell">
          <main className="admin-page">
            <header className="admin-header glass-card admin-surface">
              <div className="admin-header-top">
                <div className="brand-row">
                  <BrandLogo />
                  <div>
                    <p className="micro-label">OC Hotel</p>
                    <h1>Admin panel</h1>
                    <p className="subtle-copy">Simple record view for check-in and check-out submissions.</p>
                  </div>
                </div>

                <div className="admin-actions-small">
                  <button className="ghost-button" onClick={loadAdmin} type="button">
                    Refresh
                  </button>
                </div>
              </div>

              {/* <div className="admin-header-bottom">
                <button
                  className="large-action-button"
                  type="button"
                  onClick={() => {
                    goGuestHome();
                    startFlow('checkin');
                  }}
                >
                  Review check-ins
                </button>

                <button
                  className="large-action-button secondary"
                  type="button"
                  onClick={() => {
                    goGuestHome();
                    startFlow('checkout');
                  }}
                >
                  Review check-out
                </button>
              </div> */}
            </header>

            <section className="admin-stats">
              <StatCard label="Total submissions" value={adminKpis.total} />
              <StatCard label="Unique guests" value={adminKpis.uniqueGuests} />
              <StatCard label="Check-ins" value={adminKpis.checkins} />
              <StatCard label="Check-outs" value={adminKpis.checkouts} />
              <StatCard label="Business visits" value={adminKpis.business} />
              <StatCard label="Leisure visits" value={adminKpis.leisure} />
            </section>

            <section className="glass-card admin-toolbar admin-surface">
              <div className="toolbar-top">
                <div className="segment-row">
                  {['all', 'checkin', 'checkout'].map((tab) => (
                    <button
                      key={tab}
                      className={`segment-button ${adminTab === tab ? 'active' : ''}`}
                      onClick={() => setAdminTab(tab)}
                      type="button"
                    >
                      {tab === 'all' ? 'All' : tab === 'checkin' ? 'Check-ins' : 'Check-outs'}
                    </button>
                  ))}
                </div>

                <div className="filter-row">
                  <label>
                    From
                    <input
                      type="date"
                      value={adminFilters.startDate}
                      onChange={(e) => setAdminFilters((prev) => ({ ...prev, startDate: e.target.value }))}
                    />
                  </label>
                  <label>
                    To
                    <input
                      type="date"
                      value={adminFilters.endDate}
                      onChange={(e) => setAdminFilters((prev) => ({ ...prev, endDate: e.target.value }))}
                    />
                  </label>
                  <label>
                    Group by
                    <select
                      value={adminFilters.granularity}
                      onChange={(e) => setAdminFilters((prev) => ({ ...prev, granularity: e.target.value }))}
                    >
                      <option value="day">Day</option>
                      <option value="week">Week</option>
                      <option value="month">Month</option>
                    </select>
                  </label>

                  <div className="filter-actions">
                    <button
                      className="ghost-button"
                      type="button"
                      onClick={() => setAdminFilters({ startDate: '', endDate: '', granularity: 'day' })}
                    >
                      Clear
                    </button>
                    <button
                      className="primary-button soft"
                      type="button"
                      onClick={loadAdmin}
                    >
                      Refresh
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="records-stack">
              {loadingAdmin ? (
                <div className="glass-card empty-state admin-surface">Loading records…</div>
              ) : filteredRecords.length === 0 ? (
                <div className="glass-card empty-state admin-surface">No records available yet.</div>
              ) : (
                <>
                  <AnalyticsPanel records={filteredRecords} granularity={adminFilters.granularity} />
                  <RecordsTable records={filteredRecords} />
                </>
              )}
            </section>

            {status && <p className="status-line admin-status">{status}</p>}
          </main>
        </div>
      </>
    );
  }

  const activeSteps = view === 'checkout' ? CHECKOUT_STEPS : CHECKIN_STEPS;
  const activeIndex = view === 'checkout' ? checkOutStep : checkInStep;

  return (
    <>
      <StyleOverrides />
      <div className="guest-shell app-modern-shell">
        <main className="tablet-frame">
          <section className={`glass-card flow-wrapper modern-frame ${view === 'home' ? 'home-mode' : ''}`}>
            {view !== 'home' && view !== 'done' && (
              <div className="timeline-wrap">
                {activeSteps.map((step, index) => (
                  <div className="timeline-step" key={step}>
                    <div className={`timeline-dot ${index < activeIndex ? 'done' : index === activeIndex ? 'active' : ''}`}>
                      {index < activeIndex ? '✓' : index + 1}
                    </div>
                    <span>{step}</span>
                    {index < activeSteps.length - 1 && (
                      <div className={`timeline-line ${index < activeIndex ? 'done' : ''}`} />
                    )}
                  </div>
                ))}
              </div>
            )}

            {view === 'home' && (
              <section className="home-panel modern-home-panel full-hero-home">
                <div className="full-page-bg" style={{ backgroundImage: heroBackground }} />
                <div className="full-page-overlay" />

                <div className="home-center-shell">
                  <div className="home-main-card">
                    <div className="home-main-header">
                      <BrandLogo />
                      <div className="home-main-copy">
                        <p className="micro-label home-label">Guest Experience Form</p>
                        <h2>Welcome to OC Hotel</h2>
                        <p className="subtle-copy">
                          We appreciate you sharing your information with us. Please choose check-in or check-out below.
                        </p>
                      </div>
                    </div>

                    <div className="home-main-actions">
                      {landingCards.map((card) => {
                        const Icon = card.icon;

                        return (
                          <button
                            key={card.action}
                            className="home-large-action-card"
                            onClick={() => startFlow(card.action)}
                            type="button"
                          >
                            <div className="home-large-action-top">
                              <div className="home-large-icon">
                                <Icon className={iconClassName} strokeWidth={2} />
                              </div>
                              <span className="home-large-meta">{card.meta}</span>
                            </div>

                            <div className="home-large-action-copy">
                              <h3>{card.title}</h3>
                              <p>{card.description}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {view === 'checkin' && (
              <section className="form-flow">
                <FlowHeader title="Check-in" subtitle="Quick guest details" onBack={goGuestHome} />

                {checkInStep === 0 && (
                  <div className="flow-stack">
                    <FormCard title="Tell us who you are" subtitle="Name is required unless you choose anonymous.">
                      <button
                        className="switch-row"
                        onClick={() =>
                          setCheckIn((prev) => ({
                            ...prev,
                            anonymous: !prev.anonymous,
                            guestName: !prev.anonymous ? '' : prev.guestName,
                          }))
                        }
                        type="button"
                      >
                        <div>
                          <strong>Anonymous guest</strong>
                          <p>Choose this if you prefer not to share your name.</p>
                        </div>
                        <div className={`switch-pill ${checkIn.anonymous ? 'on' : ''}`}>
                          <span />
                        </div>
                      </button>

                      {!checkIn.anonymous && (
                        <div className="field-wrap">
                          <label>Name</label>
                          <input
                            value={checkIn.guestName}
                            onChange={(e) => setCheckIn((prev) => ({ ...prev, guestName: e.target.value }))}
                            placeholder="Enter your name"
                          />
                        </div>
                      )}

                      <div className="field-wrap compact-gap">
                        <label>
                          Where are you from? <span className="optional-tag">Optional</span>
                        </label>
                        <input
                          value={checkIn.from}
                          onChange={(e) => setCheckIn((prev) => ({ ...prev, from: e.target.value }))}
                          placeholder="City or country"
                        />
                      </div>

                      {originSuggestionsList.length > 0 && (
                        <div className="suggestion-row">
                          {originSuggestionsList.slice(0, 4).map((item) => (
                            <button
                              key={item}
                              className="mini-chip"
                              onClick={() => handleOriginSuggestion(item)}
                              type="button"
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      )}
                    </FormCard>

                    <div className="bottom-actions end-only">
                      <button
                        className="primary-button"
                        onClick={() => setCheckInStep(1)}
                        disabled={!checkIn.anonymous && !checkIn.guestName.trim()}
                        type="button"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {checkInStep === 1 && (
                  <div className="flow-stack">
                    <FormCard title="What brings you here?" subtitle="Tap one option in each group.">
                      <PickerSection
                        label="Reason for visit"
                        value={checkIn.stayReason}
                        options={visitReasonOptions}
                        onSelect={(value) => setCheckIn((prev) => ({ ...prev, stayReason: value }))}
                      />
                      <PickerSection
                        label="Who are you visiting with?"
                        value={checkIn.visitingWith}
                        options={visitingWithOptions}
                        onSelect={(value) => setCheckIn((prev) => ({ ...prev, visitingWith: value }))}
                      />
                    </FormCard>

                    <div className="bottom-actions split-actions">
                      <button className="ghost-button" onClick={() => setCheckInStep(0)} type="button">
                        Back
                      </button>
                      <button
                        className="primary-button"
                        onClick={() => setCheckInStep(2)}
                        disabled={!checkIn.stayReason || !checkIn.visitingWith}
                        type="button"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {checkInStep === 2 && (
                  <div className="flow-stack">
                    <FormCard title="What is the main purpose?" subtitle="Choose one option.">
                      <div className="purpose-grid square-grid">
                        {purposeOptions.map((option) => {
                          const Icon = option.icon;

                          return (
                            <button
                              key={option.value}
                              className={`purpose-card square-card ${checkIn.purpose === option.value ? 'selected' : ''}`}
                              onClick={() =>
                                setCheckIn((prev) => ({
                                  ...prev,
                                  purpose: option.value,
                                  eventName: '',
                                  otherPurpose: '',
                                }))
                              }
                              type="button"
                            >
                              <span className="icon-shell">
                                <Icon className={iconClassName} strokeWidth={1.9} />
                              </span>
                              <strong>{option.label}</strong>
                            </button>
                          );
                        })}
                      </div>

                      {checkIn.purpose === 'event' && (
                        <div className="field-wrap reveal-block">
                          <label>Event name</label>
                          <input
                            value={checkIn.eventName}
                            onChange={(e) => setCheckIn((prev) => ({ ...prev, eventName: e.target.value }))}
                            placeholder="Add the event name"
                          />
                        </div>
                      )}

                      {checkIn.purpose === 'something_else' && (
                        <div className="field-wrap reveal-block">
                          <label>Tell us more</label>
                          <input
                            value={checkIn.otherPurpose}
                            onChange={(e) => setCheckIn((prev) => ({ ...prev, otherPurpose: e.target.value }))}
                            placeholder="Add your purpose"
                          />
                        </div>
                      )}
                    </FormCard>

                    <div className="bottom-actions split-actions">
                      <button className="ghost-button" onClick={() => setCheckInStep(1)} type="button">
                        Back
                      </button>
                      <button
                        className="primary-button"
                        onClick={() => setCheckInStep(3)}
                        disabled={
                          !checkIn.purpose ||
                          (checkIn.purpose === 'event' && !checkIn.eventName.trim()) ||
                          (checkIn.purpose === 'something_else' && !checkIn.otherPurpose.trim())
                        }
                        type="button"
                      >
                        Review
                      </button>
                    </div>
                  </div>
                )}

                {checkInStep === 3 && (
                  <div className="flow-stack">
                    <ReviewPanel
                      title="Check-in review"
                      rows={[
                        ['Guest', checkIn.anonymous ? 'Anonymous guest' : checkIn.guestName || '—'],
                        ['From', checkIn.from || 'Not provided'],
                        ['Reason for visit', checkIn.stayReason || '—'],
                        ['Visiting with', checkIn.visitingWith || '—'],
                        ['Main purpose', findPurposeLabel(checkIn.purpose)],
                        ['Event name', checkIn.eventName || '—'],
                        ['More details', checkIn.otherPurpose || '—'],
                      ]}
                    />
                    <PrivacyNote />
                    <div className="bottom-actions split-actions">
                      <button className="ghost-button" onClick={() => setCheckInStep(2)} type="button">
                        Back
                      </button>
                      <button className="primary-button" onClick={() => submitFlow('checkin')} type="button">
                        Submit check-in
                      </button>
                    </div>
                  </div>
                )}
              </section>
            )}

            {view === 'checkout' && (
              <section className="form-flow">
                <FlowHeader title="Check-out" subtitle="Quick stay feedback" onBack={goGuestHome} />

                {checkOutStep === 0 && (
                  <div className="flow-stack">
                    <FormCard title="How was your stay?" subtitle="Choose the options that fit best.">
                      <PickerSection
                        label="Overall experience"
                        value={checkOut.overall}
                        options={overallExperienceOptions}
                        onSelect={(value) => setCheckOut((prev) => ({ ...prev, overall: value }))}
                      />
                      <MultiPickerSection
                        label="Which property areas stood out most?"
                        values={checkOut.propertyFocus}
                        options={checkoutPropertyOptions}
                        onToggle={(value) => toggleArrayValue(setCheckOut, 'propertyFocus', value, 4)}
                      />
                    </FormCard>

                    <div className="bottom-actions split-actions">
                      <button className="ghost-button" onClick={goGuestHome} type="button">
                        Back
                      </button>
                      <button
                        className="primary-button"
                        onClick={() => setCheckOutStep(1)}
                        disabled={!checkOut.overall || checkOut.propertyFocus.length === 0}
                        type="button"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {checkOutStep === 1 && (
                  <div className="flow-stack">
                    <FormCard title="Help us improve" subtitle="Pick a few areas so we can make better decisions.">
                      <MultiPickerSection
                        label="What did you like most?"
                        values={checkOut.liked}
                        options={checkoutLikedOptions}
                        onToggle={(value) => toggleArrayValue(setCheckOut, 'liked', value, 4)}
                      />
                      <MultiPickerSection
                        label="What should we improve?"
                        values={checkOut.improve}
                        options={checkoutImproveOptions}
                        onToggle={(value) => toggleArrayValue(setCheckOut, 'improve', value, 4)}
                      />
                      <MultiPickerSection
                        label="What would you like to see next time?"
                        values={checkOut.future}
                        options={checkoutFutureOptions}
                        onToggle={(value) => toggleArrayValue(setCheckOut, 'future', value, 4)}
                      />
                      <div className="field-wrap compact-gap">
                        <label>
                          Anything else? <span className="optional-tag">Optional</span>
                        </label>
                        <input
                          value={checkOut.note}
                          onChange={(e) => setCheckOut((prev) => ({ ...prev, note: e.target.value }))}
                          placeholder="Short note"
                        />
                      </div>
                    </FormCard>

                    <div className="bottom-actions split-actions">
                      <button className="ghost-button" onClick={() => setCheckOutStep(0)} type="button">
                        Back
                      </button>
                      <button className="primary-button" onClick={() => setCheckOutStep(2)} type="button">
                        Review
                      </button>
                    </div>
                  </div>
                )}

                {checkOutStep === 2 && (
                  <div className="flow-stack">
                    <ReviewPanel
                      title="Check-out review"
                      rows={[
                        ['Overall experience', checkOut.overall || '—'],
                        ['Property areas', checkOut.propertyFocus.join(', ') || 'No selection'],
                        ['Liked most', checkOut.liked.join(', ') || 'No selection'],
                        ['Improve', checkOut.improve.join(', ') || 'No selection'],
                        ['Would like to see', checkOut.future.join(', ') || 'No selection'],
                        ['Comment', checkOut.note || '—'],
                      ]}
                    />
                    <PrivacyNote />
                    <div className="bottom-actions split-actions">
                      <button className="ghost-button" onClick={() => setCheckOutStep(1)} type="button">
                        Back
                      </button>
                      <button className="primary-button" onClick={() => submitFlow('checkout')} type="button">
                        Submit check-out
                      </button>
                    </div>
                  </div>
                )}
              </section>
            )}

            {view === 'done' && (
              <section className="done-panel modern-done-panel">
                <div className="done-icon">
                  <CircleCheckBig className={iconClassName} strokeWidth={2} />
                </div>
                <p className="micro-label">OC Hotel</p>
                <h2>{status || 'Submitted successfully.'}</h2>
                <p className="subtle-copy">Thank you. Your form has been submitted.</p>
                <div className="bottom-actions center-actions">
                  <button className="primary-button" onClick={goGuestHome} type="button">
                    Return to start
                  </button>
                </div>
              </section>
            )}

            {status && view !== 'done' && <p className="status-line">{status}</p>}
          </section>
        </main>
      </div>
    </>
  );
}

function BrandLogo() {
  return (
    <div className="logo-badge" aria-label="OC Hotel logo">
      <img src="/logo.png" alt="OC Hotel Logo" className="logo-image" />
    </div>
  );
}

function FlowHeader({ title, subtitle, onBack }) {
  return (
    <header className="flow-header">
      <div>
        <p className="micro-label">OC Hotel</p>
        <h2>{title}</h2>
        <p className="subtle-copy">{subtitle}</p>
      </div>

      <button className="ghost-button header-home-button" onClick={onBack} type="button">
        <Menu className={iconClassName} strokeWidth={1.9} />
        <span>Home</span>
      </button>
    </header>
  );
}

function FormCard({ title, subtitle, children }) {
  return (
    <section className="form-card">
      <div className="card-heading">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      {children}
    </section>
  );
}

function PickerSection({ label, value, options, onSelect }) {
  return (
    <div className="picker-block">
      <label>{label}</label>
      <div className="tile-picker-grid">
        {options.map((option) => {
          const normalized = typeof option === 'string' ? { label: option, icon: null } : option;
          const Icon = normalized.icon;

          return (
            <button
              key={normalized.label}
              className={`pick-tile ${value === normalized.label ? 'selected' : ''}`}
              onClick={() => onSelect(normalized.label)}
              type="button"
            >
              <span className="icon-shell">{Icon ? <Icon className={iconClassName} strokeWidth={1.9} /> : null}</span>
              <strong>{normalized.label}</strong>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function MultiPickerSection({ label, values, options, onToggle }) {
  return (
    <div className="picker-block">
      <label>{label}</label>
      <div className="tile-picker-grid multi-grid">
        {options.map((option) => {
          const normalized = typeof option === 'string' ? { label: option, icon: null } : option;
          const Icon = normalized.icon;

          return (
            <button
              key={normalized.label}
              className={`pick-tile ${values.includes(normalized.label) ? 'selected' : ''}`}
              onClick={() => onToggle(normalized.label)}
              type="button"
            >
              <span className="icon-shell">{Icon ? <Icon className={iconClassName} strokeWidth={1.9} /> : null}</span>
              <strong>{normalized.label}</strong>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ReviewPanel({ title, rows }) {
  return (
    <section className="form-card review-card">
      <div className="card-heading">
        <h3>{title}</h3>
        <p>Please review before submitting.</p>
      </div>

      <div className="review-table">
        {rows
          .filter(([, value]) => value && value !== '—')
          .map(([label, value]) => (
            <div className="review-row" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
      </div>
    </section>
  );
}

function PrivacyNote() {
  return (
    <section className="privacy-note">
      <div className="privacy-lock">
        <Lock className={iconClassName} strokeWidth={1.9} />
      </div>
      <p>Your information is used solely to personalize your experience with us. We never share it with third parties.</p>
    </section>
  );
}

function StatCard({ label, value }) {
  return (
    <article className="glass-card stat-card admin-surface">
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  );
}

function findPurposeLabel(value) {
  return purposeOptions.find((option) => option.value === value)?.label || '—';
}

function StyleOverrides() {
  return (
    <style>{`
      :root {
        --bg: #f3f4f6;
        --card: rgba(255, 255, 255, 0.72);
        --card-solid: rgba(255, 255, 255, 0.92);
        --line: rgba(15, 23, 42, 0.08);
        --text: #0f172a;
        --muted: #5b6472;
        --accent: #111111;
        --accent-2: #ee6e15;
        --accent-soft: rgba(17, 17, 17, 0.04);
        --success: #117a4f;
        --shadow: 0 22px 80px rgba(15, 23, 42, 0.10);
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        color: var(--text);
        background:
          radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.95), transparent 24%),
          radial-gradient(circle at 100% 0%, rgba(255, 255, 255, 0.7), transparent 22%),
          linear-gradient(180deg, #e9edf2 0%, #f7f8fa 100%);
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      button,
      input {
        font: inherit;
      }

      .app-modern-shell {
        position: relative;
        overflow: hidden;
        min-height: 100vh;
      }

      .app-modern-shell::before,
      .app-modern-shell::after {
        content: '';
        position: fixed;
        border-radius: 999px;
        filter: blur(22px);
        pointer-events: none;
        z-index: 0;
      }

      .app-modern-shell::before {
        width: 300px;
        height: 300px;
        top: -60px;
        left: -80px;
        background: rgba(255, 255, 255, 0.85);
      }

      .app-modern-shell::after {
        width: 340px;
        height: 340px;
        right: -100px;
        bottom: -100px;
        background: rgba(17, 17, 17, 0.05);
      }

      .guest-shell,
      .admin-shell {
        padding: 20px;
      }

      .tablet-frame,
      .admin-page {
        position: relative;
        z-index: 1;
        max-width: 980px;
        margin: 0 auto;
      }

      .glass-card {
        background: rgba(255, 255, 255, 0.76);
        border: 1px solid rgba(255, 255, 255, 0.7);
        box-shadow: var(--shadow);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
      }

      .modern-frame {
        overflow: hidden;
        background: rgba(255, 255, 255, 0.54);
        border: 1px solid rgba(255, 255, 255, 0.68);
        min-height: calc(100vh - 56px);
        border-radius: 32px;
      }

      .home-mode {
        padding: 0;
      }

      .full-hero-home {
        min-height: calc(100vh - 56px);
        position: relative;
        overflow: hidden;
        padding: 0;
        border-radius: 32px;
      }

      .full-page-bg {
        position: absolute;
        inset: 0;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        transform: scale(1.03);
      }

      .full-page-overlay {
        position: absolute;
        inset: 0;
        background:
          linear-gradient(180deg, rgba(8, 12, 18, 0.42) 0%, rgba(8, 12, 18, 0.24) 30%, rgba(8, 12, 18, 0.38) 100%);
      }

      .home-center-shell {
        position: relative;
        z-index: 2;
        min-height: calc(100vh - 56px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 32px;
      }

      .home-main-card {
        width: min(920px, 100%);
        background: rgba(255, 255, 255, 0.90);
        border: 1px solid rgba(255, 255, 255, 0.72);
        border-radius: 32px;
        box-shadow: 0 30px 80px rgba(15, 23, 42, 0.18);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        padding: 36px;
      }

      .home-main-header {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 28px;
      }

      .home-main-copy {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .home-main-copy h2 {
        margin: 0;
        font-size: clamp(2rem, 4vw, 3rem);
        line-height: 1.05;
        color: #111111;
      }

      .home-main-copy .subtle-copy {
        margin: 0;
        max-width: 640px;
        color: #4b5563;
        font-size: 1rem;
      }

      .home-label {
        color: var(--accent-2);
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        font-size: 0.76rem;
      }

      .home-main-actions {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 20px;
      }

      .home-large-action-card {
        min-height: 220px;
        border: 1px solid rgba(17, 17, 17, 0.08);
        border-radius: 26px;
        background: #ffffff;
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
        box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
        transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
        cursor: pointer;
      }

      .home-large-action-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
        border-color: rgba(238, 110, 21, 0.28);
      }

      .home-large-action-top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
      }

      .home-large-icon {
        width: 64px;
        height: 64px;
        border-radius: 18px;
        background: rgba(17, 17, 17, 0.06);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .home-large-meta {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 8px 12px;
        border-radius: 999px;
        background: var(--accent-2);
        color: #ffffff;
        font-size: 0.84rem;
        font-weight: 700;
        white-space: nowrap;
      }

      .home-large-action-copy h3 {
        margin: 0 0 10px;
        font-size: 1.45rem;
        color: #111111;
      }

      .home-large-action-copy p {
        margin: 0;
        color: #5b6472;
        font-size: 0.98rem;
        line-height: 1.5;
      }

      .logo-badge {
        width: 88px;
        height: 88px;
        border-radius: 24px;
        background: #ffffff;
        border: 1px solid rgba(17, 17, 17, 0.06);
        box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        overflow: hidden;
      }

      .logo-image {
        width: 72%;
        height: 72%;
        object-fit: contain;
        display: block;
      }

      .app-icon {
        width: 20px;
        height: 20px;
        color: #111111;
        flex-shrink: 0;
      }

      .flow-wrapper {
        padding: 24px;
      }

      .flow-wrapper.home-mode {
  padding: 0;
}

      .flow-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 24px;
      }

      .flow-header h2,
      .card-heading h3 {
        margin: 0;
      }

      .micro-label {
        margin: 0 0 6px;
        color: #111111;
        font-size: 0.75rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      .subtle-copy {
        margin: 6px 0 0;
        color: var(--muted);
      }

      .header-home-button {
        display: inline-flex;
        align-items: center;
        gap: 10px;
      }

      .timeline-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        margin-bottom: 24px;
        padding: 14px 18px;
        background: rgba(255, 255, 255, 0.72);
        border: 1px solid rgba(15, 23, 42, 0.08);
        border-radius: 20px;
      }

      .timeline-step {
        display: flex;
        align-items: center;
        gap: 10px;
        flex: 1;
        min-width: 0;
      }

      .timeline-step span {
        font-size: 0.92rem;
        font-weight: 600;
        color: #334155;
        white-space: nowrap;
      }

      .timeline-dot {
        width: 34px;
        height: 34px;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(17, 17, 17, 0.06);
        border: 1px solid rgba(17, 17, 17, 0.08);
        font-weight: 700;
        color: #111111;
        flex-shrink: 0;
      }

      .timeline-dot.active,
      .segment-button.active {
        background: var(--accent-2);
        border-color: var(--accent-2);
        color: #ffffff;
        box-shadow: 0 16px 30px rgba(17, 17, 17, 0.16);
      }

      .timeline-dot.done {
        background: #111111;
        border-color: #111111;
        color: white;
      }

      .timeline-line {
        flex: 1;
        height: 2px;
        background: rgba(15, 23, 42, 0.10);
        border-radius: 999px;
      }

      .timeline-line.done {
        background: #111111;
      }

      .form-flow,
      .flow-stack {
        display: flex;
        flex-direction: column;
        gap: 18px;
      }

      .form-card,
      .privacy-note,
      .switch-row,
      .admin-surface,
      .record-item pre {
        background: rgba(255, 255, 255, 0.76);
      }

      .form-card {
        border: 1px solid rgba(15, 23, 42, 0.08);
        border-radius: 24px;
        padding: 22px;
        box-shadow: 0 14px 40px rgba(15, 23, 42, 0.06);
      }

      .card-heading {
        margin-bottom: 18px;
      }

      .card-heading p {
        margin: 8px 0 0;
        color: var(--muted);
      }

      .field-wrap {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 16px;
      }

      .compact-gap {
        margin-top: 14px;
      }

      .reveal-block {
        margin-top: 18px;
      }

      label {
        font-size: 0.95rem;
        font-weight: 700;
        color: #111111;
      }

      .optional-tag {
        color: var(--muted);
        font-weight: 600;
        font-size: 0.85rem;
      }

      input {
        width: 100%;
        min-height: 52px;
        padding: 14px 16px;
        border-radius: 16px;
        border: 1px solid rgba(15, 23, 42, 0.10);
        background: rgba(255, 255, 255, 0.9);
        outline: none;
      }

      input:focus {
        border-color: rgba(238, 110, 21, 0.6);
        box-shadow: 0 0 0 4px rgba(238, 110, 21, 0.10);
      }

      .switch-row {
        width: 100%;
        text-align: left;
        border: 1px solid rgba(15, 23, 42, 0.08);
        border-radius: 20px;
        padding: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 18px;
        cursor: pointer;
      }

      .switch-row strong {
        display: block;
        margin-bottom: 4px;
      }

      .switch-row p {
        margin: 0;
        color: var(--muted);
      }

      .switch-pill {
        width: 58px;
        height: 34px;
        border-radius: 999px;
        background: rgba(17, 17, 17, 0.08);
        display: flex;
        align-items: center;
        padding: 4px;
        transition: 0.2s ease;
        flex-shrink: 0;
      }

      .switch-pill span {
        width: 26px;
        height: 26px;
        border-radius: 999px;
        background: white;
        box-shadow: 0 4px 10px rgba(15, 23, 42, 0.14);
        transition: 0.2s ease;
      }

      .switch-pill.on {
        background: rgba(17, 17, 17, 0.12);
        justify-content: flex-end;
      }

      .switch-pill.on span {
        background: #111111;
      }

      .picker-block {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .picker-block + .picker-block {
        margin-top: 18px;
      }

      .tile-picker-grid,
      .purpose-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;
      }

      .multi-grid,
      .square-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .pick-tile,
      .purpose-card {
        border: 1px solid rgba(15, 23, 42, 0.08);
        border-radius: 22px;
        background: rgba(255, 255, 255, 0.88);
        padding: 18px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 14px;
        text-align: left;
        cursor: pointer;
        transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease, background 0.18s ease;
      }

      .pick-tile strong,
      .purpose-card strong {
        font-size: 0.98rem;
        color: #111111;
      }

      .icon-shell,
      .privacy-lock,
      .tile-icon {
        width: 44px;
        height: 44px;
        border-radius: 14px;
        background: rgba(17, 17, 17, 0.06) !important;
        color: #111111 !important;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .pick-tile.selected,
      .purpose-card.selected {
        background: rgba(17, 17, 17, 0.04);
        border-color: rgba(17, 17, 17, 0.16);
        box-shadow: 0 12px 28px rgba(17, 17, 17, 0.08);
      }

      .suggestion-row {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 14px;
      }

      .mini-chip {
        border: 1px solid rgba(15, 23, 42, 0.08);
        background: rgba(255, 255, 255, 0.92);
        padding: 10px 14px;
        border-radius: 999px;
        cursor: pointer;
      }

      .bottom-actions {
        display: flex;
        gap: 12px;
      }

      .split-actions {
        justify-content: space-between;
      }

      .end-only {
        justify-content: flex-end;
      }

      .center-actions {
        justify-content: center;
      }

      .primary-button,
      .ghost-button,
      .segment-button {
        min-height: 50px;
        padding: 12px 18px;
        border-radius: 16px;
        border: 1px solid transparent;
        cursor: pointer;
        transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease, background 0.18s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .primary-button {
        background: #111111;
        border-color: #111111;
        color: #ffffff;
        box-shadow: 0 16px 30px rgba(17, 17, 17, 0.16);
      }

      .primary-button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .ghost-button {
        background: rgba(255, 255, 255, 0.78);
        border-color: rgba(15, 23, 42, 0.08);
        color: #111111;
      }

      .choice-tile:hover,
      .pick-tile:hover,
      .purpose-card:hover,
      .ghost-button:hover,
      .primary-button:hover,
      .mini-chip:hover,
      .segment-button:hover,
      .switch-row:hover {
        transform: translateY(-2px);
      }

      .review-card .review-table {
        display: grid;
        gap: 12px;
      }

      .review-row {
        display: flex;
        justify-content: space-between;
        gap: 18px;
        padding: 14px 0;
        border-bottom: 1px solid rgba(15, 23, 42, 0.08);
      }

      .review-row:last-child {
        border-bottom: none;
      }

      .review-row span {
        color: var(--muted);
      }

      .review-row strong {
        color: #111111;
        text-align: right;
      }

      .privacy-note {
        border: 1px solid rgba(15, 23, 42, 0.08);
        border-radius: 22px;
        padding: 18px;
        display: flex;
        align-items: center;
        gap: 14px;
      }

      .privacy-note p {
        margin: 0;
        color: var(--muted);
      }

      .done-panel {
        min-height: 680px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 32px;
      }

      .done-icon {
        width: 84px;
        height: 84px;
        border-radius: 24px;
        background: rgba(17, 17, 17, 0.06);
        color: #111111;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 18px;
      }

      .status-line {
        margin-top: 16px;
        color: #b42318;
        font-weight: 700;
      }

      .admin-header {
        display: flex;
        flex-direction: column;
        padding: 20px;
        height: 35vh;
        box-sizing: border-box;
        border-radius: 28px;
      }

      .admin-header-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
      }

      .brand-row {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .admin-actions-small {
        display: flex;
        gap: 8px;
      }

      .admin-header-bottom {
        display: flex;
        gap: 16px;
        margin-top: 18px;
        align-items: stretch;
        flex: 1 1 auto;
      }

      .large-action-button {
        flex: 1 1 0;
        border: none;
        padding: 18px 22px;
        border-radius: 12px;
        font-size: 1.05rem;
        font-weight: 700;
        background: var(--accent-2);
        color: white;
        box-shadow: 0 12px 30px rgba(17,17,17,0.12);
        cursor: pointer;
      }

      .large-action-button.secondary {
        background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.9));
        color: var(--text);
        border: 1px solid rgba(17,17,17,0.06);
      }

      .admin-stats {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;
        margin: 18px 0;
      }

      .stat-card {
        padding: 18px;
        border-radius: 22px;
        border: 1px solid rgba(15, 23, 42, 0.08);
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .stat-card span {
        color: var(--muted);
      }

      .stat-card strong {
        font-size: 1.8rem;
      }

      .admin-toolbar {
        padding: 16px;
        border-radius: 24px;
        margin-bottom: 16px;
      }

      .toolbar-top {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .filter-row {
        display: flex;
        gap: 12px;
        align-items: center;
        flex-wrap: wrap;
      }

      .filter-row label {
        display: inline-flex;
        flex-direction: column;
        font-size: 0.85rem;
        gap: 6px;
      }

      .filter-row input[type="date"],
      .filter-row select {
        padding: 8px 10px;
        border-radius: 8px;
        border: 1px solid rgba(15,23,42,0.06);
        background: #fff;
      }

      .filter-actions {
        margin-left: auto;
        display: flex;
        gap: 8px;
        align-items: center;
      }

      .segment-row {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }

      .segment-button {
        background: rgba(255, 255, 255, 0.78);
        border-color: rgba(15, 23, 42, 0.08);
        color: #111111;
      }

      .records-stack {
        display: grid;
        gap: 14px;
      }

      .record-item {
        border-radius: 22px;
        padding: 18px;
        border: 1px solid rgba(15, 23, 42, 0.08);
      }

      .record-head {
        display: flex;
        justify-content: space-between;
        gap: 14px;
        align-items: center;
        margin-bottom: 12px;
      }

      .record-pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 30px;
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 0.82rem;
        font-weight: 800;
        text-transform: capitalize;
      }

      .record-pill.checkin {
        background: rgba(17, 122, 79, 0.10);
        color: #117a4f;
      }

      .record-pill.checkout {
        background: rgba(238, 110, 21, 0.12);
        color: #c85608;
      }

      .record-time {
        color: var(--muted);
        font-size: 0.92rem;
      }

      .record-item pre {
        margin: 0;
        padding: 14px;
        border-radius: 16px;
        overflow: auto;
        border: 1px solid rgba(15, 23, 42, 0.06);
        white-space: pre-wrap;
        word-break: break-word;
      }

      .empty-state {
        padding: 24px;
        border-radius: 22px;
        text-align: center;
      }

      .analytics-panel {
        padding: 16px;
        border-radius: 18px;
      }

      .analytics-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        align-items: start;
      }

      .analytics-trend {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 12px;
        margin-top: 12px;
      }

      .analytics-card {
        padding: 12px;
        border-radius: 12px;
        background: rgba(255,255,255,0.96);
        border: 1px solid rgba(15,23,42,0.04);
      }

      .records-table table {
        width: 100%;
        border-collapse: collapse;
      }

      .records-table th,
      .records-table td {
        text-align: left;
        padding: 10px 12px;
        border-bottom: 1px solid rgba(15,23,42,0.04);
        font-size: 0.95rem;
      }

      .records-table tr:hover td {
        background: rgba(17,17,17,0.02);
      }

      @media (max-width: 900px) {
        .home-main-actions,
        .tile-picker-grid,
        .purpose-grid,
        .admin-stats {
          grid-template-columns: 1fr;
        }

        .home-main-card {
          padding: 24px;
        }

        .guest-shell,
        .admin-shell {
          padding: 14px;
        }

        .modern-frame,
        .full-hero-home {
          min-height: calc(100vh - 28px);
        }
      }

      @media (max-width: 680px) {
        .home-main-header,
        .brand-row,
        .admin-header-top,
        .flow-header,
        .review-row,
        .privacy-note {
          flex-direction: column;
          align-items: flex-start;
        }

        .home-center-shell {
          padding: 16px;
        }

        .home-main-card {
          border-radius: 24px;
          padding: 20px;
        }

        .home-large-action-card {
          min-height: 180px;
        }

        .timeline-wrap {
          flex-direction: column;
          align-items: stretch;
        }

        .timeline-step {
          width: 100%;
        }

        .timeline-line {
          display: none;
        }

        .bottom-actions.split-actions {
          flex-direction: column;
        }

        .admin-header {
          height: auto;
        }

        .admin-header-bottom {
          flex-direction: column;
        }
      }
    `}</style>
  );
}

// --- Admin analytics components ---
function BarChart({ data = [], height = 120 }) {
  const max = Math.max(1, ...data.map((d) => d.value));
  const gap = 8;
  const barWidth = Math.max(20, Math.floor((300 - gap * (data.length - 1)) / data.length));
  return (
    <svg width="100%" height={height} viewBox={`0 0 ${data.length * (barWidth + gap)} ${height}`} preserveAspectRatio="none">
      {data.map((d, i) => {
        const w = barWidth;
        const x = i * (w + gap);
        const h = Math.round((d.value / max) * (height - 24));
        const y = height - h - 20;
        return (
          <g key={d.label}>
            <rect x={x} y={y} width={w} height={h} rx="6" fill="var(--accent-2)" />
            <text x={x + w / 2} y={height - 6} fontSize="11" fill="#222" textAnchor="middle">{d.label}</text>
          </g>
        );
      })}
    </svg>
  );
}

function LineChart({ data = [], height = 120 }) {
  if (!data || data.length === 0) return null;
  const max = Math.max(1, ...data.map((d) => d.value));
  const w = Math.max(300, data.length * 36);
  const points = data.map((d, i) => {
    const x = i * (w / Math.max(1, data.length - 1));
    const y = height - (d.value / max) * (height - 24) - 12;
    return `${x},${y}`;
  }).join(' ');
  return (
    <svg width="100%" height={height} viewBox={`0 0 ${w} ${height}`} preserveAspectRatio="none">
      <polyline fill="none" stroke="var(--accent-2)" strokeWidth="3" points={points} strokeLinecap="round" strokeLinejoin="round" />
      {data.map((d, i) => {
        const x = i * (w / Math.max(1, data.length - 1));
        const y = height - (d.value / max) * (height - 24) - 12;
        return <circle key={d.label} cx={x} cy={y} r={4} fill="var(--accent-2)" />;
      })}
    </svg>
  );
}

function AnalyticsPanel({ records, granularity = 'day' }) {
  const total = records.length;
  const byType = records.reduce((acc, r) => { acc[r.type] = (acc[r.type] || 0) + 1; return acc; }, {});
  const origins = {};
  const overall = {};
  const propertyCounts = {};
  records.forEach((r) => {
    const p = r.payload || {};
    if (r.type === 'checkin') {
      if (p.from) origins[p.from] = (origins[p.from] || 0) + 1;
    } else if (r.type === 'checkout') {
      if (p.overall) overall[p.overall] = (overall[p.overall] || 0) + 1;
      (p.propertyFocus || []).forEach((item) => { propertyCounts[item] = (propertyCounts[item] || 0) + 1; });
    }
  });

  const byTypeData = Object.entries(byType).map(([label, value]) => ({ label, value }));
  const overallData = Object.entries(overall).map(([label, value]) => ({ label, value }));
  const propertyData = Object.entries(propertyCounts).map(([label, value]) => ({ label, value }));

  // build time-series grouped by granularity
  function bucketKey(date) {
    const d = new Date(date);
    if (granularity === 'month') return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    if (granularity === 'week') {
      // simple week bucket: year-weeknumber
      const onejan = new Date(d.getFullYear(),0,1);
      const week = Math.ceil((((d - onejan) / 86400000) + onejan.getDay()+1)/7);
      return `${d.getFullYear()}-W${String(week).padStart(2,'0')}`;
    }
    // day
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }

  const times = {};
  records.forEach((r) => {
    const k = bucketKey(r.createdAt);
    times[k] = (times[k] || 0) + 1;
  });
  const timesData = Object.keys(times).sort().map((k) => ({ label: k, value: times[k] }));

  return (
    <section className="glass-card analytics-panel admin-surface">
      <div className="analytics-grid">
        <div className="analytics-card">
          <h4>Total submissions</h4>
          <strong style={{ fontSize: 28 }}>{total}</strong>
          <p className="subtle-copy">Submissions by type</p>
          <div style={{ width: '100%', height: 120 }}>
            <BarChart data={byTypeData} height={120} />
          </div>
        </div>

        <div className="analytics-card">
          <h4>Overall experience</h4>
          <p className="subtle-copy">Distribution from check-outs</p>
          <div style={{ width: '100%', height: 120 }}>
            <BarChart data={overallData.length ? overallData : [{ label: '—', value: 1 }]} height={120} />
          </div>
        </div>

        <div className="analytics-card">
          <h4>Top property mentions</h4>
          <p className="subtle-copy">Frequently highlighted areas</p>
          <div style={{ width: '100%', height: 120 }}>
            <BarChart data={propertyData.length ? propertyData : [{ label: '—', value: 1 }]} height={120} />
          </div>
        </div>
      </div>

      <div style={{ marginTop: 12 }} className="analytics-trend">
        <div className="analytics-card" style={{ padding: 14 }}>
          <h4>Trend ({granularity})</h4>
          <p className="subtle-copy">Submissions over time</p>
          <div style={{ width: '100%', height: 120 }}>
            <LineChart data={timesData.length ? timesData : [{ label: '-', value: 1 }]} height={120} />
          </div>
        </div>
        <div className="analytics-card" style={{ padding: 14 }}>
          <h4>Purpose breakdown</h4>
          <p className="subtle-copy">What guests reported</p>
          <div>
            {Object.entries(origins).slice(0,6).map(([label, value]) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <div style={{ width: 120 }}>{label}</div>
                <div style={{ flex: 1, height: 10, background: 'rgba(0,0,0,0.06)', borderRadius: 6 }}>
                  <div style={{ width: `${Math.min(100, (value / Math.max(1, total)) * 100)}%`, height: '100%', background: 'var(--accent-2)', borderRadius: 6 }} />
                </div>
                <div style={{ width: 36, textAlign: 'right', fontSize: 12 }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RecordsTable({ records }) {
  return (
    <section className="glass-card records-table admin-surface">
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Date</th>
            <th>Guest</th>
            <th>From</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r) => {
            const p = r.payload || {};
            const date = new Date(r.createdAt).toLocaleString();
            const guest = p.guestName || (p.anonymous ? 'Anonymous' : '—');
            const from = p.from || p.note || '—';
            const summary = r.type === 'checkin'
              ? `${p.stayReason || '—'} • ${p.purpose ? p.purpose.replace('_', ' ') : '—'}`
              : `${p.overall || '—'} • ${ (p.liked || []).slice(0,2).join(', ') || '—' }`;
            return (
              <tr key={r.id}>
                <td className={`record-pill small ${r.type}`}>{r.type}</td>
                <td>{date}</td>
                <td>{guest}</td>
                <td>{from}</td>
                <td>{summary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default App;