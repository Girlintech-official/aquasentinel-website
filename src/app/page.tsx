export default function Home() {
  const navItems = [
    ["The Sentinel", "#sentinel"],
    ["Solutions", "#solutions"],
    ["Technology", "#technology"],
    ["Insights", "#insights"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  const metrics = [
    ["Temperature", "27.4", "°C"],
    ["pH", "7.4", ""],
    ["Dissolved Oxygen", "6.8", "mg/L"],
  ];

  const sentinelFlow = [
    {
      number: "01",
      label: "POND",
      title: "The environment",
      description:
        "Conditions are constantly changing beneath the surface. AquaSentinel starts where the farmer's most important information lives.",
    },
    {
      number: "02",
      label: "SENSORS",
      title: "Capture the signal",
      description:
        "Temperature, pH and dissolved oxygen are continuously monitored to build a clearer picture of pond conditions.",
    },
    {
      number: "03",
      label: "INTELLIGENCE",
      title: "Understand the change",
      description:
        "Software brings readings together, analyzes patterns and identifies changes that may deserve attention.",
    },
    {
      number: "04",
      label: "RISK SIGNAL",
      title: "Translate the risk",
      description:
        "Complex analysis becomes an understandable signal so the farmer can investigate what may be happening.",
    },
    {
      number: "05",
      label: "FARMER",
      title: "Act with more time",
      description:
        "The farmer remains in control — with earlier, clearer information to support better-informed decisions.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <style>{`
        @keyframes fishSwimOne {
          0% {
            transform: translateX(-15vw) translateY(0) scale(.8);
            opacity: 0;
          }
          10% {
            opacity: .7;
          }
          45% {
            transform: translateX(35vw) translateY(-18px) scale(1);
          }
          80% {
            transform: translateX(75vw) translateY(12px) scale(.95);
            opacity: .5;
          }
          100% {
            transform: translateX(115vw) translateY(-8px) scale(.8);
            opacity: 0;
          }
        }

        @keyframes fishSwimTwo {
          0% {
            transform: translateX(115vw) translateY(15px) scale(.7) rotateY(180deg);
            opacity: 0;
          }
          12% {
            opacity: .45;
          }
          50% {
            transform: translateX(55vw) translateY(-12px) scale(.9) rotateY(180deg);
          }
          85% {
            transform: translateX(10vw) translateY(20px) scale(.8) rotateY(180deg);
            opacity: .35;
          }
          100% {
            transform: translateX(-15vw) translateY(0) scale(.7) rotateY(180deg);
            opacity: 0;
          }
        }

        @keyframes fishSwimThree {
          0% {
            transform: translateX(-10vw) translateY(20px) scale(.5);
            opacity: 0;
          }
          15% {
            opacity: .3;
          }
          55% {
            transform: translateX(50vw) translateY(-8px) scale(.7);
          }
          100% {
            transform: translateX(110vw) translateY(16px) scale(.5);
            opacity: 0;
          }
        }

        @keyframes waterWaveOne {
          0%, 100% {
            transform: translateX(-2%) rotate(-1deg);
          }
          50% {
            transform: translateX(2%) rotate(1deg);
          }
        }

        @keyframes waterWaveTwo {
          0%, 100% {
            transform: translateX(2%) rotate(1deg);
          }
          50% {
            transform: translateX(-2%) rotate(-1deg);
          }
        }

        @keyframes bubbleRiseOne {
          0% {
            transform: translateY(40px) scale(.7);
            opacity: 0;
          }
          20% {
            opacity: .4;
          }
          100% {
            transform: translateY(-180px) scale(1);
            opacity: 0;
          }
        }

        @keyframes bubbleRiseTwo {
          0% {
            transform: translateY(30px) translateX(0) scale(.5);
            opacity: 0;
          }
          25% {
            opacity: .3;
          }
          100% {
            transform: translateY(-150px) translateX(20px) scale(1);
            opacity: 0;
          }
        }

        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: .2;
          }
          50% {
            transform: translateY(-18px) translateX(8px);
            opacity: .55;
          }
        }

        @keyframes sensorPulse {
          0% {
            transform: scale(.8);
            opacity: .8;
          }
          70%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes scanLine {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          15% {
            opacity: .6;
          }
          85% {
            opacity: .6;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes dataFlow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }

        @keyframes intelligencePulse {
          0%, 100% {
            box-shadow: 0 0 0 rgba(99,213,200,0);
          }
          50% {
            box-shadow: 0 0 45px rgba(99,213,200,.12);
          }
        }

        @keyframes signalBlink {
          0%, 100% {
            opacity: .4;
          }
          50% {
            opacity: 1;
          }
        }

        .fish-swim-one {
          animation: fishSwimOne 22s linear infinite;
        }

        .fish-swim-two {
          animation: fishSwimTwo 28s linear infinite;
          animation-delay: -10s;
        }

        .fish-swim-three {
          animation: fishSwimThree 25s linear infinite;
          animation-delay: -5s;
        }

        .water-wave-one {
          animation: waterWaveOne 7s ease-in-out infinite;
        }

        .water-wave-two {
          animation: waterWaveTwo 9s ease-in-out infinite;
        }

        .bubble-one {
          animation: bubbleRiseOne 8s ease-in infinite;
        }

        .bubble-two {
          animation: bubbleRiseTwo 10s ease-in infinite;
        }

        .particle-float {
          animation: particleFloat 6s ease-in-out infinite;
        }

        .sensor-pulse {
          animation: sensorPulse 2.4s ease-out infinite;
        }

        .scan-line {
          animation: scanLine 5s ease-in-out infinite;
        }

        .gentle-float {
          animation: gentleFloat 5s ease-in-out infinite;
        }

        .data-flow {
          animation: dataFlow 3.5s linear infinite;
        }

        .intelligence-pulse {
          animation: intelligencePulse 4s ease-in-out infinite;
        }

        .signal-blink {
          animation: signalBlink 2s ease-in-out infinite;
        }

        .aqua-pulse {
          animation: signalBlink 2s ease-in-out infinite;
        }

        .aqua-grid {
          background-image:
            linear-gradient(rgba(99,213,200,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,213,200,.04) 1px, transparent 1px);
          background-size: 42px 42px;
        }

        @media (prefers-reduced-motion: reduce) {
          .fish-swim-one,
          .fish-swim-two,
          .fish-swim-three,
          .water-wave-one,
          .water-wave-two,
          .bubble-one,
          .bubble-two,
          .particle-float,
          .sensor-pulse,
          .scan-line,
          .gentle-float,
          .data-flow,
          .intelligence-pulse,
          .signal-blink,
          .aqua-pulse {
            animation: none !important;
          }
        }
      `}</style>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[var(--navy-deep)]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white">
              <img
                src="/aquasentinel-logo.jpg"
                alt="AquaSentinel Labs"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="leading-none">
              <div className="text-[15px] font-semibold tracking-tight">
                <span className="text-[var(--aqua)]">Aqua</span>
                <span className="text-[#6fa7b5]">Sentinel</span>
              </div>

              <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.28em] text-[var(--aqua)]">
                Labs
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[11px] font-medium text-white/45 transition duration-300 hover:text-[var(--aqua)]"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="#pilot"
            className="rounded-full border border-[var(--aqua)]/25 bg-[var(--teal)]/10 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--aqua)] transition duration-300 hover:border-[var(--aqua)]/50 hover:bg-[var(--teal)]/20"
          >
            Join the Pilot
          </a>
        </div>
      </nav>

      {/* =========================================================
          HERO — LIVING POND
      ========================================================= */}
      <section
        className="relative min-h-[760px] overflow-hidden bg-[var(--navy-deep)] text-white lg:min-h-[850px]"
      >
        {/* BACKGROUND */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(15,143,135,.18),transparent_42%)]" />

          <div className="aqua-grid absolute inset-0 opacity-40" />

          <div className="absolute bottom-0 left-[-10%] h-[45%] w-[120%] rounded-[50%_50%_0_0] bg-[#06343b]/80" />

          <div className="absolute bottom-[7%] left-[-5%] h-[30%] w-[110%] rounded-[50%] border-t border-[var(--aqua)]/10 bg-[var(--teal)]/5" />

          <div className="water-wave-one absolute bottom-[12%] left-[-5%] h-32 w-[110%] rounded-[50%] border-t border-[var(--aqua)]/15" />

          <div className="water-wave-two absolute bottom-[8%] left-[-5%] h-36 w-[110%] rounded-[50%] border-t border-white/5" />

          {/* Bubbles */}
          <div
            className="bubble-one absolute bottom-[10%] left-[15%] h-3 w-3 rounded-full border border-[var(--aqua)]/25"
            style={{ animationDelay: "1s" }}
          />

          <div
            className="bubble-two absolute bottom-[15%] left-[32%] h-5 w-5 rounded-full border border-white/10"
            style={{ animationDelay: "3s" }}
          />

          <div
            className="bubble-one absolute bottom-[8%] right-[18%] h-4 w-4 rounded-full border border-[var(--aqua)]/20"
            style={{ animationDelay: "2s" }}
          />

          <div
            className="bubble-two absolute bottom-[18%] right-[32%] h-2.5 w-2.5 rounded-full border border-[var(--aqua)]/20"
            style={{ animationDelay: "4s" }}
          />

          {/* Floating particles */}
          {[
            ["left-[12%]", "top-[30%]", "1s"],
            ["left-[22%]", "top-[44%]", "2s"],
            ["right-[16%]", "top-[32%]", "3s"],
            ["right-[27%]", "top-[52%]", "1.5s"],
            ["left-[38%]", "top-[26%]", "4s"],
            ["right-[40%]", "top-[24%]", "2.5s"],
          ].map(([x, y, delay], index) => (
            <span
              key={index}
              className={`particle-float absolute ${x} ${y} h-1 w-1 rounded-full bg-[var(--aqua)]/40`}
              style={{ animationDelay: delay }}
            />
          ))}
        </div>

        {/* FISH */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <svg
            viewBox="0 0 120 60"
            className="fish-swim-one absolute top-[58%] h-10 w-20 text-[var(--aqua)]/25"
            fill="currentColor"
          >
            <path d="M12 30C25 12 51 10 70 23L95 8L89 25L108 30L89 35L95 52L70 37C51 50 25 48 12 30Z" />
            <circle cx="37" cy="25" r="2" fill="#031f25" />
          </svg>

          <svg
            viewBox="0 0 120 60"
            className="fish-swim-two absolute top-[68%] h-7 w-14 text-[var(--aqua)]/15"
            fill="currentColor"
          >
            <path d="M12 30C25 12 51 10 70 23L95 8L89 25L108 30L89 35L95 52L70 37C51 50 25 48 12 30Z" />
            <circle cx="37" cy="25" r="2" fill="#031f25" />
          </svg>

          <svg
            viewBox="0 0 120 60"
            className="fish-swim-three absolute top-[50%] h-6 w-12 text-white/10"
            fill="currentColor"
          >
            <path d="M12 30C25 12 51 10 70 23L95 8L89 25L108 30L89 35L95 52L70 37C51 50 25 48 12 30Z" />
            <circle cx="37" cy="25" r="2" fill="#031f25" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-24 lg:px-8 lg:pb-28 lg:pt-28">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
            {/* HERO COPY */}
            <div className="relative z-20">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--aqua)]/20 bg-white/5 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--aqua)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--aqua)] aqua-pulse" />
                Intelligent Aquaculture
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Detect earlier.
                <br />
                <span className="text-[var(--aqua)]">Act smarter.</span>
                <br />
                Protect more.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/55">
                Intelligent early-warning technology helping fish farmers
                understand changing pond conditions before small problems
                become major losses.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#pilot"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--teal)] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[var(--aqua)] hover:text-[var(--navy-deep)] hover:shadow-[0_18px_50px_rgba(15,143,135,0.3)]"
                >
                  Join the Pilot
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="#sentinel"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-[var(--aqua)]/40 hover:bg-white/10"
                >
                  Explore the Sentinel
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-[10px] uppercase tracking-[0.18em] text-white/25">
                <span>Environmental sensing</span>
                <span>AI & Intelligence</span>
                <span>Farmer-first</span>
              </div>
            </div>

            {/* HERO POND VISUAL */}
            <div className="relative z-20 min-h-[510px]">
              <div className="absolute inset-x-[5%] top-[5%] h-[80%] rounded-[3rem] border border-[var(--aqua)]/10 bg-[radial-gradient(circle_at_50%_45%,rgba(99,213,200,.13),transparent_55%)]" />

              {/* Pond */}
              <div className="absolute bottom-[5%] left-[2%] right-[2%] h-[66%] overflow-hidden rounded-[50%] border border-[var(--aqua)]/15 bg-[#052d34] shadow-[0_40px_100px_rgba(0,0,0,.35)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(99,213,200,.12),transparent_55%)]" />

                <div className="water-wave-one absolute left-[-10%] right-[-10%] top-[28%] h-20 rounded-[50%] border-t border-[var(--aqua)]/20" />

                <div className="water-wave-two absolute left-[-15%] right-[-15%] top-[43%] h-24 rounded-[50%] border-t border-white/10" />

                <div className="water-wave-one absolute left-[-15%] right-[-15%] top-[62%] h-24 rounded-[50%] border-t border-[var(--aqua)]/10" />

                {/* Sensor */}
                <div className="absolute left-[47%] top-[35%]">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[var(--aqua)]/35 bg-[#062f35]/90 shadow-[0_0_35px_rgba(99,213,200,.12)]">
                    <span className="sensor-pulse absolute inset-1 rounded-full border border-[var(--aqua)]/25" />
                    <span className="h-3 w-3 rounded-full bg-[var(--aqua)] shadow-[0_0_20px_rgba(99,213,200,.9)]" />
                  </div>

                  <div className="absolute left-1/2 top-16 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-[var(--aqua)]/30 to-transparent" />
                </div>

                {/* Fish */}
                <svg
                  viewBox="0 0 120 60"
                  className="fish-swim-one absolute top-[55%] h-12 w-24 text-[var(--aqua)]/45"
                  fill="currentColor"
                >
                  <path d="M12 30C25 12 51 10 70 23L95 8L89 25L108 30L89 35L95 52L70 37C51 50 25 48 12 30Z" />
                  <circle cx="37" cy="25" r="2" fill="#031f25" />
                </svg>

                <svg
                  viewBox="0 0 120 60"
                  className="fish-swim-two absolute top-[70%] h-8 w-16 text-white/15"
                  fill="currentColor"
                >
                  <path d="M12 30C25 12 51 10 70 23L95 8L89 25L108 30L89 35L95 52L70 37C51 50 25 48 12 30Z" />
                  <circle cx="37" cy="25" r="2" fill="#031f25" />
                </svg>

                <div className="scan-line absolute left-0 right-0 top-0 h-1/3 bg-gradient-to-b from-transparent via-[var(--aqua)]/10 to-transparent" />
              </div>

              {/* Metrics Card */}
              <div className="gentle-float absolute right-[1%] top-[3%] z-30 w-60 rounded-2xl border border-white/10 bg-[#062f35]/95 p-5 shadow-2xl backdrop-blur-xl sm:right-[4%]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                      Pond 01
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Live conditions
                    </p>
                  </div>

                  <span className="flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.14em] text-[var(--aqua)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--aqua)]" />
                    Live
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {metrics.map(([label, value, unit]) => (
                    <div key={label}>
                      <p className="text-[8px] uppercase tracking-wider text-white/30">
                        {label === "Dissolved Oxygen" ? "O₂" : label}
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        {value}
                        <span className="ml-0.5 text-[8px] font-normal text-white/40">
                          {unit}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Signal */}
              <div className="gentle-float absolute bottom-[7%] left-[1%] z-30 w-56 rounded-2xl border border-[var(--aqua)]/20 bg-[#062f35]/95 p-4 shadow-2xl backdrop-blur-xl sm:left-[4%]">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--teal)]/15">
                    <span className="sensor-pulse absolute inset-1 rounded-xl border border-[var(--aqua)]/30" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--aqua)] shadow-[0_0_15px_rgba(99,213,200,0.9)]" />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                      Current signal
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Conditions stable
                    </p>
                  </div>
                </div>

                <div className="mt-4 h-px bg-white/10" />

                <p className="mt-3 text-[9px] leading-4 text-white/35">
                  AquaSentinel is continuously interpreting pond conditions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom waves */}
        <div className="pointer-events-none absolute bottom-0 left-[-5%] right-[-5%] h-36">
          <div className="water-wave-one absolute bottom-[-35px] left-[-5%] h-32 w-[110%] rounded-[50%] bg-[var(--teal)]/10" />

          <div className="water-wave-two absolute bottom-[-55px] left-[-5%] h-32 w-[110%] rounded-[50%] border-t border-[var(--aqua)]/20 bg-[var(--teal)]/5" />

          <div
            className="water-wave-one absolute bottom-[-70px] left-[-5%] h-32 w-[110%] rounded-[50%] border-t border-white/10"
            style={{ animationDelay: "-3s" }}
          />
        </div>
      </section>

      {/* =========================================================
          PROBLEM
      ========================================================= */}
      <section className="relative overflow-hidden bg-[var(--background)] py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--teal)]">
                01 — The Problem
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--navy)] sm:text-5xl lg:text-6xl">
                Farmers don't need
                <br />
                <span className="text-[var(--muted-light)]">more data.</span>
              </h2>
            </div>

            <div className="lg:pt-10">
              <p className="max-w-2xl text-xl leading-8 text-[var(--navy)]/75">
                They need to know what that data means —
                <span className="font-semibold text-[var(--navy)]">
                  {" "}
                  before the problem becomes obvious.
                </span>
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">
                A pond can begin changing long before visible warning signs
                appear. Temperature, pH and dissolved oxygen can shift. Fish
                behaviour can change. By the time a farmer sees the problem,
                valuable time may already be gone.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--border)] md:grid-cols-4">
            {[
              [
                "01",
                "Conditions shift",
                "Water parameters begin moving outside preferred ranges.",
              ],
              [
                "02",
                "Fish respond",
                "Feeding and behaviour may change before obvious signs appear.",
              ],
              [
                "03",
                "Warning appears",
                "The farmer notices the problem after conditions have already changed.",
              ],
              [
                "04",
                "Time is lost",
                "Late response can mean stress, wasted resources and avoidable losses.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="bg-white p-7 transition duration-500 hover:bg-[var(--surface-soft)] lg:p-8"
              >
                <p className="text-[11px] font-semibold tracking-[0.2em] text-[var(--teal)]">
                  {number}
                </p>

                <h3 className="mt-12 text-xl font-semibold text-[var(--navy)]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-[var(--border)] pt-8">
            <p className="max-w-3xl text-xl leading-8 text-[var(--navy)]/70">
              The opportunity is simple:
              <span className="font-semibold text-[var(--navy)]">
                {" "}
                give farmers an earlier signal.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SENTINEL — CORE PRODUCT EXPERIENCE
      ========================================================= */}
      <section
        id="sentinel"
        className="relative overflow-hidden bg-white py-28 lg:py-36"
      >
        <div className="absolute right-[-220px] top-[80px] h-[600px] w-[600px] rounded-full border border-[var(--teal)]/5" />
        <div className="absolute bottom-[-200px] left-[-250px] h-[550px] w-[550px] rounded-full border border-[var(--teal)]/5" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--teal)]">
                02 — The Sentinel
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-[var(--navy)] sm:text-5xl lg:text-6xl">
                From pond data
                <br />
                to an{" "}
                <span className="text-[var(--teal)]">earlier signal.</span>
              </h2>
            </div>

            <div className="lg:ml-auto lg:max-w-xl">
              <p className="text-lg leading-8 text-[var(--muted)]">
                AquaSentinel connects what is happening in the pond with what
                it may mean — then turns that intelligence into information a
                farmer can actually use.
              </p>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-light)]">
                It is not simply a sensor. It is a connected early-warning
                system.
              </p>
            </div>
          </div>

          {/* PRODUCT FLOW */}
          <div className="relative mt-20">
            <div className="absolute left-[9%] right-[9%] top-[104px] hidden h-px overflow-hidden bg-[var(--border)] lg:block">
              <div className="data-flow h-full w-24 bg-gradient-to-r from-transparent via-[var(--aqua)] to-transparent" />
            </div>

            <div className="grid gap-4 lg:grid-cols-5">
              {sentinelFlow.map((item, index) => (
                <div key={item.number} className="relative">
                  <div
                    className={`group relative h-full min-h-[330px] overflow-hidden rounded-[1.75rem] border p-6 transition-all duration-500 hover:-translate-y-2 ${
                      index === 2
                        ? "intelligence-pulse border-[var(--teal)]/30 bg-[var(--navy)] text-white"
                        : index === 3
                          ? "border-[var(--teal)]/20 bg-[var(--teal-light)]"
                          : "border-[var(--border)] bg-[var(--background)]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] font-semibold tracking-[0.2em] ${
                          index === 2
                            ? "text-[var(--aqua)]"
                            : "text-[var(--teal)]"
                        }`}
                      >
                        {item.number}
                      </span>

                      <span
                        className={`text-[9px] font-semibold uppercase tracking-[0.18em] ${
                          index === 2
                            ? "text-white/30"
                            : "text-[var(--muted-light)]"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>

                    <div className="relative mt-8 flex h-24 items-center justify-center">
                      {index === 0 && (
                        <div className="relative h-20 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#9ed9d2]/20 to-[#0b5961]/20">
                          <div className="water-wave-one absolute left-[-10%] right-[-10%] top-6 h-8 rounded-[50%] border-t-2 border-[var(--aqua)]/50" />
                          <div className="water-wave-two absolute left-[-20%] right-[-20%] top-10 h-10 rounded-[50%] border-t border-white/20" />

                          <svg
                            viewBox="0 0 120 60"
                            className="absolute bottom-3 left-1/2 h-12 w-24 -translate-x-1/2 text-[var(--aqua)]"
                            fill="currentColor"
                          >
                            <path d="M12 30C25 12 51 10 70 23L95 8L89 25L108 30L89 35L95 52L70 37C51 50 25 48 12 30Z" />
                            <circle cx="37" cy="25" r="2" fill="#031f25" />
                          </svg>
                        </div>
                      )}

                      {index === 1 && (
                        <div className="flex items-center gap-3">
                          {[
                            ["T", "27.4°"],
                            ["pH", "7.4"],
                            ["O₂", "6.8"],
                          ].map(([label, value]) => (
                            <div
                              key={label}
                              className="flex h-16 w-14 flex-col items-center justify-center rounded-xl border border-[var(--teal)]/15 bg-white"
                            >
                              <span className="text-[8px] font-semibold text-[var(--teal)]">
                                {label}
                              </span>

                              <span className="mt-1 text-[9px] font-semibold text-[var(--navy)]">
                                {value}
                              </span>

                              <span className="mt-1 h-1 w-1 rounded-full bg-[var(--aqua)]" />
                            </div>
                          ))}
                        </div>
                      )}

                      {index === 2 && (
                        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[var(--aqua)]/30 bg-[var(--teal)]/10">
                          <div className="absolute inset-2 rounded-full border border-[var(--aqua)]/20" />
                          <div className="absolute inset-5 rounded-full border border-[var(--aqua)]/20" />
                          <div className="h-3 w-3 rounded-full bg-[var(--aqua)] shadow-[0_0_25px_rgba(99,213,200,.9)]" />
                        </div>
                      )}

                      {index === 3 && (
                        <div className="w-full rounded-xl border border-amber-400/20 bg-white/70 p-4">
                          <div className="flex items-center justify-between">
                            <span className="text-[8px] uppercase tracking-[0.15em] text-[var(--muted)]">
                              Pond 01
                            </span>

                            <span className="signal-blink rounded-full bg-amber-400/10 px-2 py-1 text-[8px] font-semibold text-amber-700">
                              WATCH
                            </span>
                          </div>

                          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--border)]">
                            <div className="h-full w-[68%] rounded-full bg-amber-400" />
                          </div>

                          <p className="mt-2 text-[8px] text-[var(--muted)]">
                            Changing conditions detected.
                          </p>
                        </div>
                      )}

                      {index === 4 && (
                        <div className="flex w-full items-center gap-3 rounded-xl border border-[var(--teal)]/15 bg-white/80 p-4">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--teal-light)]">
                            <span className="h-2.5 w-2.5 rounded-full bg-[var(--teal)] shadow-[0_0_0_6px_rgba(15,143,135,.1)]" />
                          </div>

                          <div>
                            <p className="text-[8px] uppercase tracking-[0.15em] text-[var(--muted)]">
                              Signal
                            </p>

                            <p className="mt-1 text-[10px] font-semibold text-[var(--navy)]">
                              Review conditions
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <h3
                      className={`mt-7 text-xl font-semibold tracking-tight ${
                        index === 2 ? "text-white" : "text-[var(--navy)]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-3 text-[13px] leading-6 ${
                        index === 2 ? "text-white/45" : "text-[var(--muted)]"
                      }`}
                    >
                      {item.description}
                    </p>

                    {index < 4 && (
                      <div
                        className={`absolute bottom-5 left-6 h-px w-8 ${
                          index === 2
                            ? "bg-[var(--aqua)]"
                            : "bg-[var(--teal)]/30"
                        }`}
                      />
                    )}
                  </div>

                  {index < sentinelFlow.length - 1 && (
                    <div className="flex h-10 items-center justify-center lg:hidden">
                      <div className="h-7 w-px bg-gradient-to-b from-[var(--teal)]/40 to-transparent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* INTELLIGENCE */}
          <div className="mt-10 overflow-hidden rounded-[2rem] bg-[var(--navy)] text-white">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="relative overflow-hidden p-8 lg:p-10">
                <div className="absolute right-[-100px] top-[-100px] h-64 w-64 rounded-full border border-[var(--aqua)]/10" />
                <div className="absolute bottom-[-120px] left-[-80px] h-56 w-56 rounded-full border border-[var(--aqua)]/10" />

                <p className="relative text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--aqua)]">
                  The intelligence layer
                </p>

                <h3 className="relative mt-5 max-w-md text-3xl font-semibold leading-tight tracking-tight lg:text-4xl">
                  The goal isn't more data.
                  <br />
                  <span className="text-[var(--aqua)]">It's more meaning.</span>
                </h3>

                <p className="relative mt-5 max-w-md text-sm leading-7 text-white/45">
                  AquaSentinel is designed to move beyond simply displaying
                  measurements. It interprets changing conditions and surfaces
                  information that can help a farmer decide what deserves
                  attention.
                </p>
              </div>

              <div className="border-t border-white/10 p-8 lg:border-l lg:border-t-0 lg:p-10">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                      Observe
                    </p>

                    <p className="mt-5 text-sm font-semibold">
                      What is changing?
                    </p>

                    <p className="mt-2 text-[11px] leading-5 text-white/40">
                      Environmental readings and farm observations.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[var(--teal)]/25 bg-[var(--teal)]/10 p-5">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-[var(--aqua)]">
                      Analyze
                    </p>

                    <p className="mt-5 text-sm font-semibold">
                      What could it mean?
                    </p>

                    <p className="mt-2 text-[11px] leading-5 text-white/40">
                      Patterns, thresholds and unusual changes.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                      Inform
                    </p>

                    <p className="mt-5 text-sm font-semibold">
                      What should I notice?
                    </p>

                    <p className="mt-2 text-[11px] leading-5 text-white/40">
                      Clearer signals for farmer investigation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-6 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-lg leading-8 text-[var(--navy)]/70">
              AquaSentinel doesn't replace the farmer.
              <span className="font-semibold text-[var(--navy)]">
                {" "}
                It gives the farmer a better signal to act on.
              </span>
            </p>

            <a
              href="#solutions"
              className="inline-flex w-fit shrink-0 rounded-full border border-[var(--border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--navy)] transition duration-300 hover:border-[var(--teal)]/30 hover:bg-[var(--teal-light)]"
            >
              See the farmer experience →
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}
      <section
        id="technology"
        className="relative overflow-hidden bg-[var(--navy-deep)] py-28 text-white lg:py-36"
      >
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          {/* INTRO */}
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--aqua)]">
              03 — Technology
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              A pond-to-signal
              <br />
              intelligence system.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">
              Hardware collects the signal. Software makes sense of it.
              Intelligence helps the farmer know when something deserves
              attention.
            </p>
          </div>

          {/* =====================================================
              SYSTEM VISUAL
          ===================================================== */}
          <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_30px_100px_rgba(0,0,0,0.25)]">
            <img
              src="/aquasentinel-system.jpg"
              alt="AquaSentinel intelligent aquaculture monitoring system showing pond sensors, control unit, intelligence layer and farmer dashboard"
              className="h-auto w-full object-cover"
            />

            <div className="border-t border-white/10 bg-[#061f25]/90 px-6 py-5 backdrop-blur-xl sm:px-8 lg:px-10">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--aqua)]">
                    The AquaSentinel system
                  </p>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">
                    Connecting what is happening in the pond to the information
                    the farmer needs to make a better-informed decision.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/40">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    Pond
                  </span>

                  <span className="text-[var(--aqua)]">→</span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    Sensors
                  </span>

                  <span className="text-[var(--aqua)]">→</span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    Intelligence
                  </span>

                  <span className="text-[var(--aqua)]">→</span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    Farmer
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* SYSTEM LAYERS */}
          <div className="mt-20 grid gap-4 lg:grid-cols-4">
            {[
              [
                "01",
                "Pond",
                "The environment where conditions continuously change.",
              ],
              [
                "02",
                "Sensors",
                "Capture temperature, pH and dissolved oxygen.",
              ],
              [
                "03",
                "Intelligence",
                "Analyze readings and identify meaningful patterns.",
              ],
              [
                "04",
                "Risk Signal",
                "Translate changing conditions into understandable information.",
              ],
            ].map(([number, title, description], index) => (
              <div
                key={number}
                className={`rounded-[1.75rem] border p-7 ${
                  index === 2
                    ? "border-[var(--teal)]/30 bg-[var(--teal)]/10"
                    : "border-white/10 bg-white/[0.035]"
                }`}
              >
                <span className="text-[10px] font-semibold tracking-[0.2em] text-[var(--aqua)]">
                  {number}
                </span>

                <h3 className="mt-12 text-2xl font-semibold">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  {description}
                </p>

                {index === 1 && (
                  <div className="mt-8 space-y-3">
                    {[
                      ["Temperature", "27.4°C"],
                      ["pH", "7.4"],
                      ["Oxygen", "6.8 mg/L"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between border-b border-white/5 pb-2"
                      >
                        <span className="text-[10px] text-white/35">
                          {label}
                        </span>

                        <span className="text-[10px] font-semibold text-white/70">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {index === 2 && (
                  <div className="mt-8 rounded-xl border border-[var(--teal)]/20 bg-black/20 p-4">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--aqua)]" />

                      <span className="text-[10px] text-white/45">
                        Processing pond data
                      </span>
                    </div>

                    <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[78%] rounded-full bg-[var(--aqua)]" />
                    </div>
                  </div>
                )}

                {index === 3 && (
                  <div className="mt-8 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-white/35">
                        Pond 01
                      </span>

                      <span className="rounded-full bg-amber-400/10 px-2 py-1 text-[8px] font-semibold text-amber-300">
                        WATCH
                      </span>
                    </div>

                    <p className="mt-3 text-[10px] leading-4 text-white/45">
                      Changing conditions detected.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* TECHNOLOGY DETAIL */}
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--aqua)]">
                Early warning
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                See the signal before the problem becomes obvious.
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/45">
                The system is designed to provide useful information earlier,
                giving farmers more time to investigate and respond.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--aqua)]">
                Farmer action
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Better information. Better-informed decisions.
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/45">
                AquaSentinel does not replace the farmer's judgment. It helps
                strengthen it with earlier, clearer information.
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="max-w-3xl text-xl leading-8 text-white/55 sm:text-2xl">
              The goal isn't simply to collect more data.
              <span className="font-semibold text-white">
                {" "}
                It's to help farmers understand what the data is telling them
                sooner.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          DASHBOARD / FARMER EXPERIENCE
      ========================================================= */}
      <section
        id="solutions"
        className="relative overflow-hidden bg-[var(--background)] py-28 lg:py-36"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--teal)]">
                04 — Farmer Experience
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-[var(--navy)] sm:text-5xl lg:text-6xl">
                Everything important.
                <br />
                <span className="text-[var(--teal)]">One clear view.</span>
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-[var(--muted)] lg:ml-auto">
              A farmer-facing dashboard turns complex pond information into a
              simple picture of what is happening and what may need attention.
            </p>
          </div>

          <div className="mt-20 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-[0_35px_100px_rgba(7,28,39,0.12)]">
            <div className="flex items-center justify-between border-b border-[var(--border)] bg-[#f9fcfb] px-5 py-4">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d9e3e2]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#d9e3e2]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#d9e3e2]" />
              </div>

              <div className="hidden rounded-full border border-[var(--border)] bg-white px-5 py-2 text-[9px] text-[var(--muted)] sm:block">
                app.aquasentinel.com/dashboard
              </div>

              <div className="w-10" />
            </div>

            <div className="grid lg:grid-cols-[210px_1fr]">
              <aside className="hidden bg-[var(--navy)] p-5 lg:block">
                <div className="flex items-center gap-3 border-b border-white/10 pb-6">
                  <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white">
                    <img
                      src="/aquasentinel-logo.jpg"
                      alt="AquaSentinel"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-tight">
                      <span className="text-[var(--aqua)]">Aqua</span>
                      <span className="text-[#6fa7b5]">Sentinel</span>
                    </p>

                    <p className="text-[8px] uppercase tracking-[0.16em] text-[var(--aqua)]/60">
                      Intelligence
                    </p>
                  </div>
                </div>

                <div className="mt-7 space-y-1.5">
                  {[
                    ["Overview", true],
                    ["My Ponds", false],
                    ["Risk Analysis", false],
                    ["Alerts", false],
                    ["History", false],
                  ].map(([label, active]) => (
                    <div
                      key={label as string}
                      className={`rounded-xl px-3 py-3 text-[10px] font-medium ${
                        active
                          ? "bg-[var(--teal)]/15 text-[var(--aqua)]"
                          : "text-white/35"
                      }`}
                    >
                      {label as string}
                    </div>
                  ))}
                </div>
              </aside>

              <div className="bg-[#f7fbfa] p-5 sm:p-7 lg:p-9">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-[10px] text-[var(--muted)]">
                      Farm overview
                    </p>

                    <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[var(--navy)]">
                      Good morning, Farmer.
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-[10px] text-[var(--muted)]">
                      Farm 01
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--teal)] text-xs font-bold text-white">
                      F
                    </div>
                  </div>
                </div>

                <div className="mt-7 rounded-2xl border border-[var(--teal)]/20 bg-white p-5">
                  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--teal-light)]">
                        <span className="h-3 w-3 rounded-full bg-[var(--teal)] shadow-[0_0_0_7px_rgba(15,143,135,0.1)]" />
                      </div>

                      <div>
                        <p className="text-[10px] text-[var(--muted)]">
                          Overall farm status
                        </p>

                        <p className="mt-1 text-lg font-semibold text-[var(--navy)]">
                          Monitoring normally
                        </p>
                      </div>
                    </div>

                    <span className="w-fit rounded-full bg-[var(--teal-light)] px-3 py-1.5 text-[9px] font-semibold text-[var(--teal-dark)]">
                      UPDATED 2 MIN AGO
                    </span>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {metrics.map(([label, value, unit]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-[var(--border)] bg-white p-5"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] text-[var(--muted)]">
                          {label}
                        </p>

                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--teal)]" />
                      </div>

                      <div className="mt-5 flex items-end gap-1">
                        <span className="text-3xl font-semibold tracking-tight text-[var(--navy)]">
                          {value}
                        </span>

                        <span className="mb-1 text-[10px] text-[var(--muted)]">
                          {unit}
                        </span>
                      </div>

                      <p className="mt-3 text-[9px] font-semibold uppercase tracking-wider text-[var(--teal)]">
                        Within monitored range
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
                  <div className="rounded-2xl border border-[var(--border)] bg-white p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-[var(--navy)]">
                          Pond conditions
                        </p>

                        <p className="mt-1 text-[9px] text-[var(--muted)]">
                          Pond 01 · Last 24 hours
                        </p>
                      </div>

                      <span className="rounded-full bg-[var(--teal-light)] px-3 py-1 text-[9px] font-semibold text-[var(--teal-dark)]">
                        STABLE
                      </span>
                    </div>

                    <div className="relative mt-7 h-44 overflow-hidden rounded-xl bg-[#f8fbfb]">
                      <div className="absolute inset-0 opacity-60">
                        <div className="absolute left-0 right-0 top-1/4 border-t border-[var(--border)]" />
                        <div className="absolute left-0 right-0 top-1/2 border-t border-[var(--border)]" />
                        <div className="absolute left-0 right-0 top-3/4 border-t border-[var(--border)]" />
                      </div>

                      <svg
                        viewBox="0 0 700 180"
                        className="absolute inset-0 h-full w-full"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 115 C60 105 80 110 130 92 C180 75 190 105 240 88 C300 68 325 78 370 70 C430 58 450 75 500 58 C550 43 590 61 630 45 C660 35 680 40 700 35"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="text-[var(--teal)]"
                        />
                      </svg>

                      <div className="absolute right-4 top-4 rounded-lg bg-[var(--navy)] px-3 py-2 text-[9px] text-white shadow-lg">
                        <span className="text-white/40">Current</span>
                        <span className="ml-2 font-semibold">27.4°C</span>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4 flex justify-between text-[8px] text-[var(--muted)]">
                        <span>00:00</span>
                        <span>06:00</span>
                        <span>12:00</span>
                        <span>18:00</span>
                        <span>Now</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[var(--border)] bg-white p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-[var(--navy)]">
                        Recent alerts
                      </p>

                      <span className="text-[9px] text-[var(--muted)]">
                        View all
                      </span>
                    </div>

                    <div className="mt-6 space-y-4">
                      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-semibold uppercase tracking-wider text-amber-700">
                            Watch
                          </span>

                          <span className="text-[8px] text-amber-600">
                            10 min ago
                          </span>
                        </div>

                        <p className="mt-2 text-xs font-semibold text-[var(--navy)]">
                          Dissolved oxygen changed
                        </p>

                        <p className="mt-1 text-[9px] leading-4 text-[var(--muted)]">
                          Review current pond conditions.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[var(--border)] bg-[#f8fbfb] p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-semibold uppercase tracking-wider text-[var(--teal)]">
                            Normal
                          </span>

                          <span className="text-[8px] text-[var(--muted)]">
                            42 min ago
                          </span>
                        </div>

                        <p className="mt-2 text-xs font-semibold text-[var(--navy)]">
                          Temperature stable
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-[var(--teal)]/20 bg-[var(--teal-light)] p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white">
                      <span className="relative flex h-5 w-5 items-center justify-center">
                        <span className="absolute inset-0 rounded-full border border-[var(--teal)]/30" />
                        <span className="h-2 w-2 rounded-full bg-[var(--teal)]" />
                      </span>
                    </div>

                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--teal-dark)]">
                        AquaSentinel intelligence
                      </p>

                      <p className="mt-1 text-sm font-medium text-[var(--navy)]">
                        Current conditions are within monitored ranges.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#pilot"
              className="inline-flex rounded-full bg-[var(--teal)] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[var(--teal-dark)]"
            >
              Become a Pilot Farmer →
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROGRESS
      ========================================================= */}
      <section id="insights" className="bg-white py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--teal)]">
                05 — Progress
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-[var(--navy)] sm:text-5xl">
                From idea
                <br />
                to{" "}
                <span className="text-[var(--teal)]">
                  field validation.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
                AquaSentinel is being developed with farmers, not just for
                them. Early conversations, testing and partnerships are
                helping shape the product around real aquaculture needs.
              </p>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {[
                  ["20+", "Farmers confirming the need for the intelligence"],
                  ["6", "Farmers waiting to patronize the solution"],
                  ["1", "Farmer dashboard already built"],
                  ["1", "Hardware partnership initiated"],
                ].map(([number, text]) => (
                  <div
                    key={number + text}
                    className="rounded-3xl border border-[var(--border)] bg-[var(--background)] p-7"
                  >
                    <p className="text-4xl font-semibold tracking-tight text-[var(--navy)]">
                      {number}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section
        id="about"
        className="relative overflow-hidden bg-[var(--surface-soft)] py-28 lg:py-36"
      >
        <div className="absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full border border-[var(--teal)]/10" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--teal)]">
                06 — About AquaSentinel
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-[var(--navy)] sm:text-5xl lg:text-6xl">
                Technology should
                <br />
                meet the farmer
                <br />
                <span className="text-[var(--teal)]">where they are.</span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[var(--navy)]/70">
                AquaSentinel Labs is building intelligent technology for
                aquaculture — combining environmental sensing, software and
                intelligent analysis to help fish farmers detect changes
                earlier.
              </p>

              <p className="mt-6 text-base leading-7 text-[var(--muted)]">
                We believe the future of aquaculture is not simply about
                collecting more information. It is about making the right
                information understandable, timely and useful.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <span className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-xs font-medium text-[var(--navy)]">
                  Aquaculture
                </span>

                <span className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-xs font-medium text-[var(--navy)]">
                  AI & Intelligence
                </span>

                <span className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-xs font-medium text-[var(--navy)]">
                  Environmental Monitoring
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA / CONTACT
      ========================================================= */}
      <section
        id="pilot"
        className="relative overflow-hidden bg-[var(--navy-deep)] py-28 text-white lg:py-36"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[var(--teal)]/10 blur-[130px]" />

          <div className="absolute inset-0 aqua-grid opacity-20" />

          <div
            className="bubble-one absolute bottom-[18%] left-[10%] h-4 w-4 rounded-full border border-[var(--aqua)]/30"
            style={{ animationDelay: "1s" }}
          />

          <div
            className="bubble-two absolute bottom-[8%] left-[22%] h-6 w-6 rounded-full border border-white/15"
            style={{ animationDelay: "3s" }}
          />

          <div
            className="bubble-one absolute right-[14%] top-[18%] h-5 w-5 rounded-full border border-[var(--aqua)]/25"
            style={{ animationDelay: "2s" }}
          />

          <div
            className="bubble-two absolute bottom-[12%] right-[24%] h-3 w-3 rounded-full border border-[var(--aqua)]/25"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--aqua)]/20 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--aqua)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--aqua)] aqua-pulse" />
              Start a conversation
            </div>

            <h2 className="text-balance text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              See what your fish
              <span className="block text-[var(--aqua)]">
                can&apos;t tell you.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-8 text-white/55 sm:text-lg">
              AquaSentinel helps fish farmers understand what is happening
              beneath the surface, detect risks earlier, and make better
              decisions before small problems become major losses.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:aquasentinellabs@gmail.com"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--teal)] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[var(--aqua)] hover:text-[var(--navy-deep)] hover:shadow-[0_18px_50px_rgba(15,143,135,0.3)]"
              >
                Get in Touch

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="https://www.linkedin.com/company/aquasentinel-labs/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-[var(--aqua)]/40 hover:bg-white/10"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <div
            id="contact"
            className="mx-auto mt-20 max-w-5xl border-t border-white/10 pt-10"
          >
            <div className="grid gap-5 md:grid-cols-3">
              {/* EMAIL */}
              <a
                href="mailto:aquasentinellabs@gmail.com"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--aqua)]/30 hover:bg-white/[0.05]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--teal)]/10 text-[var(--aqua)]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-5 w-5"
                  >
                    <path
                      d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                      strokeLinecap="round"
                    />

                    <path
                      d="m3 7 9 6 9-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  Email
                </p>

                <p className="mt-2 text-sm font-medium text-white/80 transition-colors group-hover:text-[var(--aqua)]">
                  aquasentinellabs@gmail.com
                </p>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/company/aquasentinel-labs/"
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--aqua)]/30 hover:bg-white/[0.05]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--teal)]/10 text-[var(--aqua)]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5a1.5 1.5 0 0 0 0 3.5ZM5 10h3v9H5v-9Zm5 0h2.9v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19h-3v-4.2c0-1-.02-2.29-1.4-2.29-1.4 0-1.62 1.1-1.62 2.22V19h-3v-9Z" />
                  </svg>
                </div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  LinkedIn
                </p>

                <p className="mt-2 text-sm font-medium text-white/80 transition-colors group-hover:text-[var(--aqua)]">
                  AquaSentinel Labs
                </p>
              </a>

              {/* LOCATION */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--teal)]/10 text-[var(--aqua)]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-5 w-5"
                  >
                    <path
                      d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <circle cx="12" cy="10" r="2.2" />
                  </svg>
                </div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  Location
                </p>

                <p className="mt-2 text-sm font-medium text-white/80">
                  Ghana
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-white/10 bg-[var(--navy-deep)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            {/* BRAND */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white">
                <img
                  src="/aquasentinel-logo.jpg"
                  alt="AquaSentinel Labs"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <p className="font-semibold tracking-tight">
                  <span className="text-[var(--aqua)]">Aqua</span>
                  <span className="text-[#6fa7b5]">Sentinel</span>
                  <span className="ml-1 text-[var(--aqua)]">Labs</span>
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[var(--aqua)]/50">
                  See what your fish can&apos;t tell you.
                </p>
              </div>
            </div>

            {/* LINKS */}
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/40">
              <a
                href="#sentinel"
                className="transition duration-300 hover:text-[var(--aqua)]"
              >
                Sentinel
              </a>

              <a
                href="#solutions"
                className="transition duration-300 hover:text-[var(--aqua)]"
              >
                Solutions
              </a>

              <a
                href="#technology"
                className="transition duration-300 hover:text-[var(--aqua)]"
              >
                Technology
              </a>

              <a
                href="#insights"
                className="transition duration-300 hover:text-[var(--aqua)]"
              >
                Insights
              </a>

              <a
                href="#about"
                className="transition duration-300 hover:text-[var(--aqua)]"
              >
                About
              </a>

              <a
                href="#contact"
                className="transition duration-300 hover:text-[var(--aqua)]"
              >
                Contact
              </a>
            </div>

            {/* COPYRIGHT */}
            <div className="text-xs text-white/25 lg:text-right">
              <p>© 2026 AquaSentinel Labs</p>
              <p className="mt-1">Intelligent Aquaculture</p>
            </div>
          </div>

          <div className="mt-8 border-t border-white/5 pt-6">
            <p className="text-center text-[10px] uppercase tracking-[0.18em] text-white/20">
              See what your fish can&apos;t tell you.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}