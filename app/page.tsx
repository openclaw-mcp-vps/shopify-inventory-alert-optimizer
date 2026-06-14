export default function Page() {
  const faqs = [
    {
      q: 'How does sales velocity analysis work?',
      a: 'We pull your Shopify order history and calculate rolling average daily sales per SKU, then project stockout dates based on current inventory levels.'
    },
    {
      q: 'What alert channels are supported?',
      a: 'Email and webhooks out of the box. Webhook support means you can pipe alerts into Slack, PagerDuty, or any tool you already use.'
    },
    {
      q: 'Do you need full Shopify API access?',
      a: 'No. We only request read access to products, inventory, and orders — never write access to your store.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Shopify stores with 50+ SKUs
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Smart inventory alerts that{' '}
          <span className="text-[#58a6ff]">prevent stockouts</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Analyzes your Shopify sales velocity to predict stockout dates and fires intelligent low-stock alerts — with supplier reorder suggestions — before you lose a single sale.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors"
        >
          Start preventing stockouts — $15/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">Cancel anytime. No write access to your store.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '📈', title: 'Velocity Analysis', desc: 'Rolling daily sales rates per SKU from your real order history.' },
          { icon: '🔔', title: 'Smart Alerts', desc: 'Email & webhook alerts when stock hits your custom reorder threshold.' },
          { icon: '📦', title: 'Reorder Suggestions', desc: 'Recommended order quantities based on lead time and demand trends.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</p>
          <ul className="text-left space-y-2 mb-8 text-sm text-[#c9d1d9]">
            {[
              'Unlimited SKUs',
              'Sales velocity dashboard',
              'Email + webhook alerts',
              'Reorder quantity suggestions',
              'Shopify read-only OAuth'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Inventory Alert Optimizer. All rights reserved.
      </footer>
    </main>
  )
}
