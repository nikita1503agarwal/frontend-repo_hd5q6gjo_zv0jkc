import { useState } from 'react'
import { Truck, Fuel, Activity, Receipt, ShieldCheck, Gauge, ArrowRight, Menu, X, CheckCircle2 } from 'lucide-react'

function NavBar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Operations', href: '#operations' },
    { label: 'Fuel', href: '#fuel' },
    { label: 'Invoicing', href: '#invoicing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-blue-600 text-white grid place-items-center">
            <Truck size={18} />
          </div>
          <span className="font-semibold text-gray-900">FleetOS</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(n => (
            <a key={n.href} href={n.href} className="text-gray-700 hover:text-blue-600 transition-colors">{n.label}</a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors">
            Get Started <ArrowRight size={16} />
          </a>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          {navItems.map(n => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block px-4 py-3 text-gray-800 hover:bg-gray-50">{n.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="block m-4 text-center bg-blue-600 text-white px-4 py-2 rounded-lg">Get Started</a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="pt-28 pb-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            <ShieldCheck size={14} /> Built for Indian Fleets
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Reduce Breakdowns, Save Fuel, Get Paid Faster
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            A connected trucking platform that turns real vehicle data into maintenance actions and GST-compliant invoices. All in one place.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700">
              Book a Demo <ArrowRight size={18} />
            </a>
            <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-300 hover:border-gray-400 text-gray-800 bg-white">
              Explore Features
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Breakdown Cost Saved', value: '₹25K/mo' },
              { label: 'Fuel Efficiency Gain', value: '+6.4%' },
              { label: 'Faster Payments', value: '12→5 days' },
              { label: 'Uptime', value: '99.2%' },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-lg p-4 border shadow-sm">
                <div className="text-sm text-gray-500">{s.label}</div>
                <div className="mt-1 text-xl font-bold text-gray-900">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200/60 to-transparent rounded-3xl blur-2xl" />
          <div className="relative bg-white rounded-2xl border shadow-xl overflow-hidden">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 grid place-items-center rounded-lg bg-blue-50 text-blue-700 border border-blue-100">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="text-xl font-semibold text-gray-900">{value}</div>
      </div>
    </div>
  )
}

function DashboardPreview() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-gray-900">Fleet Overview</div>
        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Live</span>
      </div>
      <div className="mt-4 grid sm:grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-lg p-4 border">
          <Stat icon={Activity} label="Active Faults" value="2 Critical" />
        </div>
        <div className="bg-gray-50 rounded-lg p-4 border">
          <Stat icon={Fuel} label="Fuel Economy" value="3.9 → 4.2 km/l" />
        </div>
        <div className="bg-gray-50 rounded-lg p-4 border">
          <Stat icon={Gauge} label="Tyre Pressure" value="-12% Rear-R" />
        </div>
      </div>
      <div className="mt-4 border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-2 text-left">Vehicle</th>
              <th className="px-4 py-2 text-left">Health</th>
              <th className="px-4 py-2 text-left">Fuel</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { v: 'MH12 AB 1234', h: 'DTC P2457 (EGR)', f: '4.1 km/l', s: 'In Transit' },
              { v: 'MH48 XY 4421', h: 'OK', f: '4.4 km/l', s: 'Loading' },
              { v: 'GJ01 CF 9981', h: 'Tyre -10%', f: '3.8 km/l', s: 'Idle 36m' },
            ].map((row) => (
              <tr key={row.v} className="odd:bg-white even:bg-gray-50">
                <td className="px-4 py-2">{row.v}</td>
                <td className="px-4 py-2">{row.h}</td>
                <td className="px-4 py-2">{row.f}</td>
                <td className="px-4 py-2">{row.s}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, points, tag }) {
  return (
    <div className="group p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="h-10 w-10 grid place-items-center rounded-lg bg-blue-600 text-white">
          <Icon size={20} />
        </div>
        {tag && <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">{tag}</span>}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <ul className="mt-3 space-y-2">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-gray-600">
            <CheckCircle2 className="text-emerald-600 mt-0.5" size={18} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">One platform, two wins</h2>
          <p className="mt-2 text-gray-600">Cut operating waste and accelerate cash flow with connected operations and smart invoicing.</p>
        </div>

        <div id="operations" className="mt-8 grid md:grid-cols-2 gap-6">
          <FeatureCard
            icon={Activity}
            title="Predictive Maintenance"
            tag="Reduce Downtime"
            points={[
              'Live engine health & fault codes (J1939/CAN ready)',
              'Rule-based alerts for overheating, oil, DPF, batteries',
              'Work orders with parts, labor, downtime tracking',
            ]}
          />
          <FeatureCard
            icon={Fuel}
            title="Fuel Intelligence"
            tag="Save Fuel"
            points={[
              'Idle detection and cost attribution',
              'Tyre pressure impact on FE (10% drop → ~1% loss)',
              'Driver behavior (overspeed, harsh accel/brake) flags',
            ]}
          />
        </div>

        <div id="invoicing" className="mt-6 grid md:grid-cols-2 gap-6">
          <FeatureCard
            icon={Receipt}
            title="GST-Compliant Invoicing"
            tag="Get Paid Faster"
            points={[
              'Auto-generate from trip distance, idle, waiting',
              'CGST/SGST/IGST breakup + e-Invoicing JSON payload',
              'Dispute center, reminders, and payment tracking',
            ]}
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Audit-Ready Records"
            points={[
              'Trip, LR, POD, and invoice linked end-to-end',
              'Tamper-resistant history and approvals',
              'Download branded PDF with QR',
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl font-bold">Ready to modernize your fleet?</h3>
          <p className="mt-3 text-white/80">See how small fleet owners reduce fuel waste, prevent breakdowns, and accelerate order-to-cash in weeks.</p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            {[
              'Onboarding under 1 week',
              'Device-ready (CAN/J1939)',
              'GST-compliant billing',
              'Works with any GPS',
            ].map((b) => (
              <li key={b} className="flex items-center gap-2"><CheckCircle2 size={18} /> {b}</li>
            ))}
          </ul>
        </div>
        <form className="bg-white text-gray-900 rounded-2xl p-6 shadow-xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Full name</label>
              <input className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ravi Kumar" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Company</label>
              <input className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="RK Logistics" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-gray-600">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@company.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-gray-600">What do you want to improve?</label>
              <select className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Breakdowns & maintenance</option>
                <option>Fuel efficiency</option>
                <option>Invoicing & payments</option>
                <option>All of the above</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <button type="button" className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700">
                Request demo <ArrowRight size={18} />
              </button>
              <p className="mt-2 text-xs text-gray-500">By submitting you agree to be contacted.</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-700">
          <div className="h-8 w-8 rounded-lg bg-blue-600 text-white grid place-items-center">
            <Truck size={18} />
          </div>
          <span className="font-semibold">FleetOS</span>
        </div>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} FleetOS. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Privacy</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}
