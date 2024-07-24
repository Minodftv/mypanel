(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    48312: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return i(14453);
        },
      ]);
    },
    14453: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          __N_SSP: function () {
            return q;
          },
          default: function () {
            return pages;
          },
        });
      var n = i(85893),
        a = i(52118),
        l = i(4314),
        s = i(41386),
        r = i(1261),
        o = {
          pinklock: async function (e) {
            return (await r.x.get("/tvl/pinklock", { params: { chain_id: e } }))
              .data;
          },
          liquidityRaised: async function (e) {
            return (
              await r.x.get("/tvl/liquidity_raised", {
                params: { chain_id: e },
              })
            ).data;
          },
          getHomeStats: async function (e) {
            return (
              await r.x.get("/master_data/dashboard", {
                params: { chainIds: e },
              })
            ).data;
          },
        },
        d = i(68304),
        c = i(34288),
        u = i(3300),
        m = i(63467),
        x = i(36492),
        h = i(2593),
        p = i(56371),
        v = i(67294),
        f = i(33145),
        home_useHomeStats = function () {
          let e = (0, f.Z)(),
            t = (0, x.a)({
              queryKey: [l.C.queryKey.HOME_STATS_API_TVL],
              queryFn: async () => o.getHomeStats(l.C.SUPPORTED_ALL_CHAINS),
              refetchInterval: !1,
              refetchOnMount: !1,
              refetchIntervalInBackground: !1,
              refetchOnWindowFocus: !1,
              refetchOnReconnect: !1,
              retry: !1,
            }),
            i = (0, v.useMemo)(() => {
              try {
                return l.C.SUPPORTED_ALL_CHAINS.reduce(
                  (i, n, a) => {
                    var l, s, r, o;
                    let x = (t.data || []).find((e) => e.chainId === n),
                      h =
                        n === d.OT.DEVNET || n === d.OT.MAINNET
                          ? c.Z.nativeCurrency.decimals
                          : null === (l = (0, u.zK)(n)) || void 0 === l
                          ? void 0
                          : l.nativeCurrency.decimals,
                      v =
                        n === d.OT.MAINNET || n === d.OT.DEVNET
                          ? e.solanaPriceUsd
                          : null === (s = e.nativeTokenPriceUsd) || void 0 === s
                          ? void 0
                          : s[n];
                    return (i = {
                      totalParticipants:
                        i.totalParticipants +
                        ((null == x ? void 0 : x.totalParticipants) || 0),
                      totalNumberOfPools:
                        i.totalNumberOfPools +
                        ((null == x ? void 0 : x.totalProjects) || 0),
                      totalLiquidityRaisedInEther:
                        i.totalLiquidityRaisedInEther.add(
                          (0, p.parseUnits)(
                            (null == x ? void 0 : x.tlr.toString()) || "0",
                            h
                          )
                        ),
                      totalValueLockedInEther: i.totalValueLockedInEther.add(
                        (0, p.parseUnits)(
                          (null == x ? void 0 : x.tvl.toString()) || "0",
                          h
                        )
                      ),
                      totalValueLockedInEtherPriceUsd:
                        i.totalValueLockedInEtherPriceUsd +
                        ((0, m.gD)(
                          i.totalValueLockedInEther.add(
                            (0, p.parseUnits)(
                              (null == x ? void 0 : x.tvl.toString()) || "0",
                              h
                            )
                          ),
                          n === d.OT.MAINNET || n === d.OT.DEVNET
                            ? c.Z.nativeCurrency.decimals
                            : null === (r = (0, u.zK)(n)) || void 0 === r
                            ? void 0
                            : r.nativeCurrency.decimals
                        ) || 0) *
                          (v || 0),
                      totalLiquidityRaisedInEtherPriceUsd:
                        i.totalLiquidityRaisedInEtherPriceUsd +
                        ((0, m.gD)(
                          i.totalLiquidityRaisedInEther.add(
                            (0, p.parseUnits)(
                              (null == x ? void 0 : x.tlr.toString()) || "0",
                              h
                            )
                          ),
                          n === d.OT.MAINNET || n === d.OT.DEVNET
                            ? c.Z.nativeCurrency.decimals
                            : null === (o = (0, u.zK)(n)) || void 0 === o
                            ? void 0
                            : o.nativeCurrency.decimals
                        ) || 0) *
                          (v || 0),
                    });
                  },
                  {
                    totalParticipants: 0,
                    totalNumberOfPools: 0,
                    totalLiquidityRaisedInEther: h.O$.from(0),
                    totalValueLockedInEther: h.O$.from(0),
                    totalValueLockedInEtherPriceUsd: 0,
                    totalLiquidityRaisedInEtherPriceUsd: 0,
                  }
                );
              } catch (e) {
                return {
                  totalParticipants: 0,
                  totalNumberOfPools: 0,
                  totalLiquidityRaisedInEther: h.O$.from(0),
                  totalValueLockedInEther: h.O$.from(0),
                  totalValueLockedInEtherPriceUsd: 0,
                  totalLiquidityRaisedInEtherPriceUsd: 0,
                };
              }
            }, [t.data, e.nativeTokenPriceUsd, e.solanaPriceUsd]),
            n = (0, v.useMemo)(
              () =>
                l.C.SUPPORTED_ALL_CHAINS.reduce(
                  (i, n) => {
                    var a;
                    let l = (t.data || []).find((e) => e.chainId === n),
                      s =
                        n === d.OT.MAINNET || n === d.OT.DEVNET
                          ? e.solanaPriceUsd
                          : null === (a = e.nativeTokenPriceUsd) || void 0 === a
                          ? void 0
                          : a[n];
                    return (i = {
                      pinklockTVL:
                        i.pinklockTVL + ((null == l ? void 0 : l.tvl) || 0),
                      pinklockStableCoinTVL:
                        i.pinklockStableCoinTVL +
                        ((null == l ? void 0 : l.stableCoinTvl) || 0),
                      liquidityRaisedTVL:
                        i.liquidityRaisedTVL +
                        ((null == l ? void 0 : l.tlr) || 0),
                      liquidityRaisedStableCoinTVL:
                        i.liquidityRaisedStableCoinTVL +
                        ((null == l ? void 0 : l.stableCoinTlr) || 0),
                      pinklockTVLInUsd:
                        i.pinklockTVLInUsd +
                        (((null == l ? void 0 : l.tvl) || 0) * (s || 0) +
                          ((null == l ? void 0 : l.stableCoinTvl) || 0)),
                      liquidityRaisedTVLInUsd:
                        i.liquidityRaisedTVLInUsd +
                        ((null == l ? void 0 : l.tlr) || 0) * (s || 0) +
                        (i.liquidityRaisedStableCoinTVL +
                          ((null == l ? void 0 : l.stableCoinTlr) || 0)),
                    });
                  },
                  {
                    pinklockTVL: 0,
                    pinklockStableCoinTVL: 0,
                    liquidityRaisedTVL: 0,
                    liquidityRaisedStableCoinTVL: 0,
                    pinklockTVLInUsd: 0,
                    liquidityRaisedTVLInUsd: 0,
                  }
                ),
              [t.data, e.nativeTokenPriceUsd, e.solanaPriceUsd]
            );
          return { allChainStats: i, allChainTvls: n, homeStats: t };
        },
        k = i(55034),
        g = i(28652),
        N = i(67421),
        j = i(29453),
        y = i(25675),
        S = i.n(y),
        EcosystemSection_EcosystemSectionItem = function (e) {
          let { title: t, description: i } = e;
          return (0, n.jsxs)("div", {
            className:
              "transition-all bg-white dark:bg-brand-dark p-6 rounded-lg shadow-sm hover:shadow-sm",
            children: [
              (0, n.jsx)("div", {
                className: "w-[64px] mx-auto mb-6",
                children: (0, n.jsx)(S(), {
                  src: j.Z,
                  alt: "PinkSale",
                  width: 64,
                  height: 64,
                }),
              }),
              (0, n.jsx)("h3", {
                className: "font-medium text-lg leading-relaxed",
                children: t,
              }),
              (0, n.jsx)("p", {
                className: "text-sm text-gray-400 dark:text-brand-text-dark",
                children: i,
              }),
            ],
          });
        },
        home_EcosystemSection = function () {
          let { t: e } = (0, N.$G)("home"),
            t = [
              { title: "PinkMoon", description: e("ecosystemSection_1") },
              { title: "PinkSale", description: e("ecosystemSection_2") },
              { title: "PinkSwap", description: e("ecosystemSection_3") },
              { title: "PinkLock", description: e("ecosystemSection_4") },
              { title: "PinkElon", description: e("ecosystemSection_5") },
              { title: "PinkWallet", description: e("ecosystemSection_6") },
            ];
          return (0, n.jsxs)("section", {
            className: "mt-32 text-center mb-12",
            children: [
              (0, n.jsx)("h2", {
                className: "leading-relaxed text-2xl font-semibold mb-4",
                children: e("ecosystemSection_7"),
              }),
              (0, n.jsx)("p", {
                className: "leading-relaxed",
                children: e("ecosystemSection_8"),
              }),
              (0, n.jsx)("div", {
                className:
                  "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12",
                children: t.map((e) => {
                  let { title: t, description: i } = e;
                  return (0, n.jsx)(
                    EcosystemSection_EcosystemSectionItem,
                    { title: t, description: i },
                    t
                  );
                }),
              }),
            ],
          });
        },
        _ = i(65400),
        T = i(2549),
        home_HeroSection = function () {
          let { t: e } = (0, N.$G)("home");
          return (0, n.jsx)("section", {
            className:
              "py-8 sm:py-16 md:py-20 lg:py-24 flex flex-col justify-center text-center md:text-left",
            children: (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)("h1", {
                  className:
                    "text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold leading-relaxed",
                  children: e("heroSection_1"),
                }),
                (0, n.jsx)("p", {
                  className: "leading-relaxed pt-6",
                  children: e("heroSection_2"),
                }),
                (0, n.jsx)("p", {
                  className: "leading-relaxed pb-4",
                  children: e("heroSection_3"),
                }),
                (0, n.jsxs)("div", {
                  className:
                    "pt-4 flex gap-4 items-center justify-center md:justify-start",
                  children: [
                    (0, n.jsx)(T.Z, {
                      href: "/app/",
                      onClick: function () {
                        window.location = "/app/";
                      },
                      children: (0, n.jsx)(_.default, {
                        type: "primary",
                        children: e("createNow"),
                      }),
                    }),
                    (0, n.jsx)(T.Z, {
                      href: l.C.links.DOCS,
                      className: "hover:text-brand underline",
                      children: e("learnMore"),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        b = i(72066),
        I = i(93967),
        P = i.n(I),
        common_StatItem = function (e) {
          let {
            title: t,
            value: i,
            titleClassName: a,
            valueClassName: l,
            className: s,
          } = e;
          return (0, n.jsxs)("div", {
            className: P()(
              "transition-all flex-1 flex flex-col items-center",
              s
            ),
            children: [
              (0, n.jsx)("div", {
                className: P()(
                  "text-4xl leading-relaxed uppercase text-brand",
                  l
                ),
                children: i,
              }),
              (0, n.jsx)("div", { className: P()("text-xs", a), children: t }),
            ],
          });
        },
        home_StatsPanel = function (e) {
          let {
              liquidityRaisedTVLInUsd: t,
              totalNumberOfPools: i,
              totalParticipants: a,
              pinklockTVLInUsd: s,
            } = e,
            { t: r } = (0, N.$G)("home"),
            o = (0, f.Z)();
          return (0, n.jsx)("div", {
            className: "animation-fly-wrapper",
            children: (0, n.jsxs)("div", {
              className: "homepage-stats",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "text-xs py-2 px-4 border-b border-dashed dark:border-neutral-800",
                  children: r("howBig"),
                }),
                (0, n.jsx)("div", {
                  className: "p-6",
                  children: (0, n.jsxs)("div", {
                    className: "grid grid-cols-2 gap-6",
                    children: [
                      (0, n.jsx)(common_StatItem, {
                        title: r("totalLiquidityRaised"),
                        value: t ? "$".concat((0, m.dm)(t)) : "-",
                      }),
                      (0, n.jsx)(common_StatItem, {
                        title: r("totalProjects"),
                        value: i ? (0, m.dm)(i) : "-",
                      }),
                      (0, n.jsx)(common_StatItem, {
                        title: r("totalParticipants"),
                        value: a ? (0, m.dm)(a) : "-",
                      }),
                      (0, n.jsx)(common_StatItem, {
                        title: r("totalValuesLocked"),
                        value: s ? "$".concat((0, m.dm)(s)) : "-",
                      }),
                    ],
                  }),
                }),
                (0, n.jsxs)("div", {
                  className:
                    "text-xs py-2 px-4 border-t border-dashed dark:border-neutral-800 flex items-center gap-2",
                  children: [
                    (0, n.jsx)("div", {
                      children: (0, n.jsx)(S(), {
                        src: j.Z,
                        alt: "PinkSale",
                        width: 16,
                        height: 16,
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: "flex-1",
                      children: (0, n.jsx)(b.Z, {
                        href: l.C.links.PINKSALE_TOKEN_COINGECKO,
                        className: "underline hover:text-brand",
                        children: "PINKSALE",
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: "text-brand",
                      children: (0, n.jsx)(b.Z, {
                        href: l.C.links.PINKSALE_TOKEN_COINGECKO,
                        children: o.pinksalePriceUsd
                          ? "$".concat(
                              o.pinksalePriceUsd.toLocaleString("en-US", {
                                maximumFractionDigits: 2,
                              })
                            )
                          : "-",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        TokenSection_TokenSectionItem = function (e) {
          let { title: t, description: i } = e;
          return (0, n.jsxs)("div", {
            className:
              "transition-all bg-white dark:bg-brand-dark p-6 rounded-lg shadow-sm hover:shadow-sm",
            children: [
              (0, n.jsx)("div", {
                className: "w-[64px] mx-auto mb-6",
                children: (0, n.jsx)(S(), {
                  src: j.Z,
                  alt: "PinkSale",
                  width: 64,
                  height: 64,
                }),
              }),
              (0, n.jsx)("h3", {
                className: "font-medium text-lg leading-relaxed",
                children: t,
              }),
              (0, n.jsx)("p", {
                className: "text-sm text-gray-400 dark:text-brand-text-dark",
                children: i,
              }),
            ],
          });
        },
        home_TokenSection = function () {
          let { t: e } = (0, N.$G)("home"),
            t = [
              { title: e("standard"), description: e("tokenSection_1") },
              { title: e("deflationary"), description: e("tokenSection_2") },
              { title: e("customization"), description: e("tokenSection_3") },
              { title: e("launchpad"), description: e("tokenSection_4") },
              { title: e("branding"), description: e("tokenSection_5") },
              { title: e("management"), description: e("tokenSection_6") },
              { title: e("community"), description: e("tokenSection_7") },
              { title: e("locking"), description: e("tokenSection_8") },
            ];
          return (0, n.jsxs)("section", {
            className: "mt-32 text-center mb-12",
            children: [
              (0, n.jsx)("h2", {
                className: "leading-relaxed text-2xl font-semibold mb-4",
                children: e("tokenSection_9"),
              }),
              (0, n.jsxs)("p", {
                className: "leading-relaxed",
                children: [
                  e("tokenSection_10"),
                  (0, n.jsx)("br", {}),
                  " ",
                  e("tokenSection_11"),
                ],
              }),
              (0, n.jsx)("div", {
                className:
                  "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12",
                children: t.map((e) => {
                  let { title: t, description: i } = e;
                  return (0, n.jsx)(
                    TokenSection_TokenSectionItem,
                    { title: t, description: i },
                    t
                  );
                }),
              }),
            ],
          });
        },
        E = i(7500),
        L = i(72054),
        C = i(56714),
        O = i(1463),
        w = i(98324),
        V = i(94055),
        A = i(75275),
        ProjectsOfTheWeek_ProjectItem = function (e) {
          let {
              name: t,
              symbol: i,
              logoUrl: a,
              chainId: l,
              poolAddress: s,
              ath: r,
            } = e,
            o = (0, O.Z)();
          return (0, n.jsxs)(T.Z, {
            href:
              l === d.OT.DEVNET || l === d.OT.MAINNET
                ? o("/solana/launchpad/".concat(s))
                : (0, w.uD)({ chainId: l, poolAddress: s }),
            className:
              "text-center p-4 rounded-sm text-sm inline-block w-[120px] whitespace-normal group relative overflow-hidden -mb-1",
            children: [
              (0, n.jsx)(A.Z, {
                url: a,
                chainId: l,
                className:
                  "transition-all duration-200 group-hover:scale-125 group-hover:-translate-y-2",
              }),
              (0, n.jsx)(V.default, {
                title: t,
                placement: "bottom",
                mouseEnterDelay: 1,
                children: (0, n.jsx)("div", {
                  className:
                    "line-clamp-1 w-full text-xs font-medium mt-3 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2 group-hover:text-brand",
                  children: t,
                }),
              }),
              (0, n.jsx)("div", {
                className:
                  "text-xs text-gray-400 dark:text-neutral-400 line-clamp-1 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2",
                children: i,
              }),
              r
                ? (0, n.jsxs)("div", {
                    className:
                      "absolute z-[2] transition-all duration-200 rotate-45 bg-emerald-200 dark:bg-emerald-600 text-emerald-800 dark:text-black text-[10px] leading-[12px] w-[100px] py-[2px] top-[8px] group-hover:top-[4px] -right-[32px] group-hover:-right-[40px] text-center font-semibold",
                    children: ["x", r.toFixed(0)],
                  })
                : null,
            ],
          });
        },
        common_ProjectsOfTheWeek = function () {
          let e = (0, L.C)((e) => e.trending.topProjects);
          return (null == e ? void 0 : e.length)
            ? (0, n.jsx)("div", {
                className: "mx-auto pt-20",
                children: (0, n.jsx)(C.Z, {
                  children: (0, n.jsx)("div", {
                    className: "overflow-x-auto",
                    children: (0, n.jsx)("div", {
                      className:
                        "overflow-x-auto w-fit whitespace-nowrap -mx-2 divide-x divide-dashed dark:divide-neutral-800",
                      children: (e || []).map((e) => {
                        var t, i, a;
                        return (0, n.jsx)(
                          ProjectsOfTheWeek_ProjectItem,
                          {
                            name:
                              (null === (t = e.token) || void 0 === t
                                ? void 0
                                : t.name) || "",
                            symbol:
                              (null === (i = e.token) || void 0 === i
                                ? void 0
                                : i.symbol) || "",
                            logoUrl:
                              null === (a = e.token) || void 0 === a
                                ? void 0
                                : a.logoUrl,
                            chainId: e.chainId,
                            poolAddress: e.poolAddress,
                            ath: e.athPreSale,
                          },
                          e.address
                        );
                      }),
                    }),
                  }),
                }),
              })
            : null;
        },
        U = i(63195),
        StatsSection_StatItem = function (e) {
          var t;
          let {
              chainId: i,
              totalNumberOfPools: a,
              totalParticipants: l,
              liquidityRaisedTVL: s,
              liquidityRaisedStableCoinTVL: r,
              pinklockTVL: o,
              pinklockStableCoinTVL: c,
            } = e,
            u = (0, f.Z)(),
            x =
              i === d.OT.MAINNET || i === d.OT.DEVNET
                ? u.solanaPriceUsd
                : null === (t = u.nativeTokenPriceUsd) || void 0 === t
                ? void 0
                : t[i],
            h = (0, v.useMemo)(() => (s || 0) * (x || 0) + (r || 0), [r, s, x]),
            p = (0, v.useMemo)(() => (o || 0) * (x || 0) + (c || 0), [c, o, x]);
          return (0, n.jsxs)("tr", {
            children: [
              (0, n.jsx)("td", {
                className: "py-2 px-1",
                children: (0, n.jsx)(U.Z, { chainId: i }),
              }),
              (0, n.jsx)("td", {
                className: "py-2 px-1",
                children: a ? (0, m.dm)(a) : "-",
              }),
              (0, n.jsx)("td", {
                className: "py-2 px-1",
                children: l ? (0, m.dm)(l) : "-",
              }),
              (0, n.jsx)("td", {
                className: "py-2 px-1",
                children: h ? "$".concat((0, m.dm)(h)) : "-",
              }),
              (0, n.jsx)("td", {
                className: "py-2 px-1",
                children: p ? "$".concat((0, m.dm)(p)) : "-",
              }),
            ],
          });
        },
        home_StatsSection = function (e) {
          let { homeStats: t } = e,
            { t: i } = (0, N.$G)(["common", "home"]);
          return (0, n.jsx)("div", {
            className: "mt-20",
            children: (0, n.jsx)(C.Z, {
              className: "p-4",
              title: "Supported chains",
              children: (0, n.jsxs)("table", {
                width: "100%",
                className: "border-spacing-1",
                children: [
                  (0, n.jsx)("thead", {
                    className:
                      "text-left font-medium border-b border-dashed dark:border-neutral-800",
                    children: (0, n.jsxs)("tr", {
                      children: [
                        (0, n.jsx)("th", {
                          className: "font-medium px-1",
                          children: i("chain"),
                        }),
                        (0, n.jsx)("th", {
                          className: "font-medium px-1",
                          children: i("projects"),
                        }),
                        (0, n.jsx)("th", {
                          className: "font-medium px-1",
                          children: i("participants"),
                        }),
                        (0, n.jsx)("th", {
                          className: "font-medium px-1",
                          children: i("home:liquidityRaised"),
                        }),
                        (0, n.jsx)("th", {
                          className: "font-medium px-1",
                          children: i("home:valuesLocked"),
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsx)("tbody", {
                    className: "divide-y divide-dashed dark:divide-neutral-800",
                    children: l.C.SUPPORTED_ALL_CHAINS.map((e) => {
                      let i = ((null == t ? void 0 : t.data) || []).find(
                        (t) => t.chainId === e
                      );
                      return (0, n.jsx)(
                        StatsSection_StatItem,
                        {
                          chainId: e,
                          totalNumberOfPools:
                            null == i ? void 0 : i.totalProjects,
                          totalParticipants:
                            null == i ? void 0 : i.totalParticipants,
                          liquidityRaisedTVL: null == i ? void 0 : i.tlr,
                          liquidityRaisedStableCoinTVL:
                            null == i ? void 0 : i.stableCoinTlr,
                          pinklockTVL: null == i ? void 0 : i.tvl,
                          pinklockStableCoinTVL:
                            null == i ? void 0 : i.stableCoinTvl,
                          isStatLoading: null == t ? void 0 : t.isLoading,
                          isTvlLoading: null == t ? void 0 : t.isLoading,
                        },
                        e
                      );
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        pages_HomePage = function () {
          let {
              allChainTvls: e,
              homeStats: t,
              allChainStats: i,
            } = home_useHomeStats(),
            a = (0, s.Z)();
          return (
            (0, x.a)({
              queryKey: [l.C.queryKey.TOP_PROJECT],
              queryFn: async () => (a((0, k.rd)()), {}),
            }),
            (0, n.jsx)(g.Z, {
              children: (0, n.jsxs)(E.Z, {
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex gap-4 items-center flex-col md:flex-row",
                    children: [
                      (0, n.jsx)("div", {
                        className: "flex-1",
                        children: (0, n.jsx)(home_HeroSection, {}),
                      }),
                      (0, n.jsx)("div", {
                        children: (0, n.jsx)(home_StatsPanel, {
                          liquidityRaisedTVLInUsd: e.liquidityRaisedTVLInUsd,
                          totalNumberOfPools: i.totalNumberOfPools,
                          totalParticipants: i.totalParticipants,
                          pinklockTVLInUsd: e.pinklockTVLInUsd,
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsx)(common_ProjectsOfTheWeek, {}),
                  (0, n.jsx)(home_StatsSection, { homeStats: t }),
                  (0, n.jsx)(home_TokenSection, {}),
                  (0, n.jsx)(home_EcosystemSection, {}),
                ],
              }),
            })
          );
        },
        q = !0,
        pages = function () {
          return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(a.Z, {}), (0, n.jsx)(pages_HomePage, {})],
          });
        };
    },
    56714: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return Card_Card;
        },
      });
      var n = i(85893),
        a = i(93967),
        l = i.n(a),
        Card_Card = function (e) {
          let {
              className: t,
              title: i,
              children: a,
              bg: s = "bg-white dark:bg-brand-dark",
              wrapperClassName: r,
              extra: o,
            } = e,
            d = null == t ? void 0 : t.includes("rounded");
          return i
            ? (0, n.jsxs)("div", {
                className: l()(
                  "rounded-md shadow-sm dark:shadow-lg dark:text-brand-text-dark",
                  s,
                  r
                ),
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "flex items-center border-b border-dashed dark:border-neutral-800 p-4",
                    children: [
                      (0, n.jsx)("h2", {
                        className:
                          "capitalize font-semibold leading-relaxed text-md flex-1",
                        children: i,
                      }),
                      o,
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: l()("text-sm", t),
                    children: a,
                  }),
                ],
              })
            : (0, n.jsx)("div", {
                className: l()(
                  "shadow-sm dark:shadow-lg text-sm dark:text-brand-text-dark",
                  t,
                  { "rounded-md": !d },
                  s
                ),
                children: a,
              });
        };
    },
    28652: function (e, t, i) {
      "use strict";
      var n = i(85893),
        a = i(43495);
      t.Z = function (e) {
        let { children: t } = e;
        return (0, n.jsx)(a.E.div, {
          initial: { y: 16, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: 16, opacity: 0 },
          transition: { type: "keyframes", duration: 0.2, ease: "easeOut" },
          children: t,
        });
      };
    },
    52118: function (e, t, i) {
      "use strict";
      var n = i(85893),
        a = i(4314),
        l = i(84307),
        s = i(6264),
        r = i(2962),
        o = i(9008),
        d = i.n(o);
      t.Z = function (e) {
        let {
            title: t = l.Z.defaultTitle,
            description: i = l.Z.defaultDescription,
            url: o,
            image: c = "".concat(a.C.links.PINKSALE_DOMAIN, "/logo512.png"),
          } = e,
          u = {
            type: "website",
            locale: "en_IE",
            url: o || a.C.links.PINKSALE_DOMAIN,
            siteName: "PinkSale",
            title: (0, s.r)(t),
            description: (0, s.r)(i),
            images: [{ url: c }],
          };
        return (
          o && (u.url = o),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(d(), {
                children: [
                  (0, n.jsx)("meta", { charSet: "utf-8" }),
                  (0, n.jsx)("meta", {
                    name: "viewport",
                    content:
                      "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no",
                  }),
                  (0, n.jsx)("link", {
                    rel: "icon",
                    href: "".concat(a.C.links.PINKSALE_DOMAIN, "/favicon.png"),
                  }),
                  (0, n.jsx)("link", {
                    rel: "apple-touch-icon",
                    href: "".concat(a.C.links.PINKSALE_DOMAIN, "/logo192.png"),
                  }),
                  (0, n.jsx)("link", {
                    rel: "manifest",
                    href: "".concat(
                      a.C.links.PINKSALE_DOMAIN,
                      "/manifest.json"
                    ),
                  }),
                ],
              }),
              (0, n.jsx)(r.PB, {
                title: (0, s.r)(t),
                description: (0, s.r)(i),
                openGraph: u,
                themeColor: "#f95192",
                canonical: o,
                twitter: {
                  handle: "@pinkecosystem",
                  site: "@pinkecosystem",
                  cardType: "summary_large_image",
                },
                facebook: { appId: "pinkecosystem" },
              }),
              (0, n.jsx)(r.iu, {
                url: a.C.links.PINKSALE_DOMAIN,
                potentialActions: [
                  {
                    target: "".concat(a.C.links.PINKSALE_DOMAIN, "/search?qs"),
                    queryInput: "search_term_string",
                  },
                ],
              }),
            ],
          })
        );
      };
    },
    6264: function (e, t, i) {
      "use strict";
      i.d(t, {
        Di: function () {
          return downloadAsCsv;
        },
        P9: function () {
          return getYoutubeVideoId;
        },
        Pd: function () {
          return mergeAndExtends;
        },
        ds: function () {
          return extractError;
        },
        r: function () {
          return escapeHTML;
        },
      });
      var n = i(4314),
        a = i(29204),
        l = i(79826);
      function getYoutubeVideoId(e) {
        try {
          let t = e.match(n.C.YOUTUBE_ID_PATTERN);
          if (t) return t[1];
          return;
        } catch (e) {
          return;
        }
      }
      function extractError(e) {
        var t, i, n, s, r, o;
        if (e instanceof a.d7) {
          let t =
            null === (s = e.response) || void 0 === s
              ? void 0
              : null === (n = s.data) || void 0 === n
              ? void 0
              : n.message;
          return Array.isArray(t)
            ? t.join(", ")
            : (null == t ? void 0 : t.toString()) || e.message || e.toString();
        }
        let d = (0, l.serializeError)(e),
          c = null == d ? void 0 : d.message;
        if (
          ((null === (i = d.data) || void 0 === i
            ? void 0
            : null === (t = i.originalError) || void 0 === t
            ? void 0
            : t.reason) &&
            (c =
              null === (o = d.data) || void 0 === o
                ? void 0
                : null === (r = o.originalError) || void 0 === r
                ? void 0
                : r.reason),
          !c)
        )
          return (null == e ? void 0 : e.message) || e.toString();
        {
          let [, e = ""] = c.split("execution reverted: "),
            [t] = e.split('",');
          return t || c;
        }
      }
      function downloadAsCsv(e, t) {
        let i = encodeURI(e),
          n = document.createElement("a");
        n.setAttribute("href", i),
          n.setAttribute("download", t),
          document.body.appendChild(n),
          n.click();
      }
      function escapeHTML(e) {
        return e
          ? String(e).replace(
              /[&<>'"]/g,
              (e) =>
                ({
                  "&": "&amp;",
                  "<": "&lt;",
                  ">": "&gt;",
                  "'": "&#39;",
                  '"': "&quot;",
                }[e] || e)
            )
          : "";
      }
      function mergeAndExtends(e, t) {
        var i = {};
        for (var n in e) i[n] = e[n];
        if (t) for (var a in t) t[a] && (i[a] = t[a]);
        return i;
      }
    },
  },
  function (e) {
    e.O(0, [3323, 9774, 2888, 179], function () {
      return e((e.s = 48312));
    }),
      (_N_E = e.O());
  },
]);
