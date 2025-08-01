import React, { useEffect, useState } from "react";

const saPromos = [
  {
    id: 1,
    casino: "Betway South Africa",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Betway_Logo_%28black%29.svg",
    title: "100% Deposit Bonus up to R1,000",
    description: "Welcome bonus on your first deposit. T&Cs apply.",
    type: "Welcome",
    affiliateLink: "https://betway.co.za/?ref=bonushunter",
  },
  {
    id: 2,
    casino: "Hollywoodbets",
    logo: "https://content.hollywoodbets.net/stacked_logo_e5ae2a6a5c.svg",
    title: "Get R25 Free Bet",
    description: "No deposit required. New users only. 18+.",
    type: "Welcome",
    affiliateLink: "https://hollywoodbets.net/signup?ref=bonushunter",
  },
  {
    id: 25,
    casino: "SuperSportBet",
    logo: "https://web-btk-cms-app-prod-staging.azurewebsites.net/media/1298/supersportbet_logo_negative.svg",
    title: "100% Welcome Bonus up to R1,000",
    description: "Join SuperSportBet and double your first deposit. 18+ T&Cs apply.",
    type: "Welcome",
    affiliateLink: "https://www.supersportbet.co.za/?ref=bonushunter",
  },
  {
    id: 3,
    casino: "SunBet",
    logo: "https://ocs-sport.ams3.cdn.digitaloceanspaces.com/sst/2022/05/Sunbet_footer.png",
    title: "Up to R1,000 Bonus",
    description: "Matched deposit for new customers.",
    type: "Welcome",
    affiliateLink: "https://www.sunbet.co.za/?ref=bonushunter",
  },
  {
    id: 4,
    casino: "Supabets",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Supabet_logo.jpg",
    title: "R50 Free on Sign Up",
    description: "Instant sign‑up bonus. T&Cs apply.",
    type: "Welcome",
    affiliateLink: "https://www.supabets.co.za/?ref=bonushunter",
  },
  {
    id: 5,
    casino: "PlayLive Casino",
    logo: "https://www.playlive.co.za/images/logo.png",
    title: "100% Match + R50 Free",
    description: "Live casino bonus. R50 free, plus matched deposit.",
    type: "Welcome",
    affiliateLink: "https://www.playlive.co.za/?ref=bonushunter",
  },
  {
    id: 6,
    casino: "LottoStar",
    logo: "https://cdn.brandfetch.io/idti0rvN4a/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1750772368153",
    title: "Win Daily Bonuses",
    description: "Jackpots and promos available daily.",
    type: "Weekly",
    affiliateLink: "https://www.lottostar.co.za/?ref=bonushunter",
  },
  {
    id: 7,
    casino: "Gbets",
    logo: "https://www.gbets.co.za/fs/userFiles-v2/gbets-x-version-18748431/images/logo.svg?v=1732607771",
    title: "First Deposit Bonus + Free Spins",
    description: "Sign up now to claim your reward.",
    type: "Welcome",
    affiliateLink: "https://www.gbets.co.za/?ref=bonushunter",
  },
  {
    id: 8,
    casino: "Bet.co.za",
    logo: "https://www.bet.co.za/library/Icons/26916.png",
    title: "R1,000 Match Bonus",
    description: "Matched deposit for sports and casino.",
    type: "Welcome",
    affiliateLink: "https://www.bet.co.za/?ref=bonushunter",
  },
  {
    id: 9,
    casino: "SportingBet SA",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/de/Sportingbet_logo.png",
    title: "Daily Drops & Wins",
    description: "Play daily and win share of prize pool.",
    type: "Weekly",
    affiliateLink: "https://www.sportingbet.co.za/?ref=bonushunter",
  },
  {
    id: 10,
    casino: "YesPlay",
    logo: "https://yesplay.bet/assets/images/svg/yesplay.svg",
    title: "R100 Free Bet",
    description: "Free bet upon verification. No deposit needed.",
    type: "Welcome",
    affiliateLink: "https://www.yesplay.bet/?ref=bonushunter",
  },
  {
    id: 12,
    casino: "Betshezi",
    logo: "https://www.betshezi.com/logo.png?v=1750870583",
    title: "200% Welcome Bonus",
    description: "Triple your first deposit today!",
    type: "Welcome",
    affiliateLink: "https://www.betshezi.co.za/?ref=bonushunter",
  },
  {
    id: 13,
    casino: "TopBet",
    logo: "https://s3.eu-central-1.wasabisys.com/online-sa1-89c852fddd/public/1804d5fe-98aa-6d1d-71e4-f6788afbf5cb",
    title: "R30 Free Bet + 100% Match",
    description: "Exclusive deal for new signups.",
    type: "Welcome",
    affiliateLink: "https://www.topbet.co.za/?ref=bonushunter",
  },
  {
    id: 14,
    casino: "Betfred South Africa",
    logo: "https://s3.eu-central-1.wasabisys.com/online-sa4-1b2079e6ec/public/174006d0-b5e5-a127-5af6-5a5789922e78",
    title: "Bonus Boosts Weekly",
    description: "Reload bonuses every weekend.",
    type: "Weekly",
    affiliateLink: "https://www.betfredsa.co.za/?ref=bonushunter",
  },
  {
    id: 17,
    casino: "WSB.co.za",
    logo: "https://cdn.worldsportsbetting.co.za/images/WSBWC/World-Sports-Betting.png",
    title: "First Bet Risk‑Free",
    description: "Money‑back offer on first bet.",
    type: "Welcome",
    affiliateLink: "https://www.wsb.co.za/?ref=bonushunter",
  },
  {
    id: 19,
    casino: "EAZIWIN",
    logo: "https://content.nationallottery.co.za/images/siteImg/logo.png",
    title: "Scratch & Win Daily",
    description: "Instant win games with real cash.",
    type: "Welcome",
    affiliateLink: "https://www.eaziwin.co.za/?ref=bonushunter",
  },
  {
    id: 20,
    casino: "Lottoland SA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Lottoland-logo.svg",
    title: "Mega Millions + Promos",
    description: "International jackpots, local service.",
    type: "Welcome",
    affiliateLink: "https://www.lottoland.co.za/?ref=bonushunter",
  },
  {
    id: 21,
    casino: "Playabets",
    logo: "https://cdn.brandfetch.io/idbx1KRKfX/w/400/h/400/theme/dark/icon.jpeg",
    title: "R50 Free Bet + 100% Match",
    description: "New player welcome bonus. T&Cs apply.",
    type: "Welcome",
    affiliateLink: "https://www.playabets.co.za/?ref=bonushunter",
  },
  {
    id: 22,
    casino: "Play.co.za",
    logo: "https://d33gnw6p8p2s9o.cloudfront.net/b765ad75-7a58-4e1d-9e49-f6c3dbabf68a/images/logo.png",
    title: "Welcome Bonus Available",
    description: "Claim your matched deposit bonus today.",
    type: "Welcome",
    affiliateLink: "https://www.play.co.za/?ref=bonushunter",
  },
  {
    id: 23,
    casino: "10bet South Africa",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/10bet_black_logo.svg",
    title: "Up to R1,000 + Free Bets",
    description: "Big welcome bonus with free bet options.",
    type: "Welcome",
    affiliateLink: "https://www.10bet.co.za/?ref=bonushunter",
  },
  {
    id: 24,
    casino: "1xBet",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_1xBet.png",
    title: "100% up to R2,000",
    description: "Register and get a bonus on your first deposit.",
    type: "Welcome",
    affiliateLink: "https://www.1xbet.co.za/?ref=bonushunter",
  },
  {
  id: 26, 
  casino: "BetJets",
  name: "BetJets.co.za",
  logo: "https://betjetspartners.co.za/wp-content/uploads/2024/06/betjets-partner-logo-web.jpg", 
  bonus: "R3,000 Welcome Bonus",
  affiliateLink: "https://betjets.co.za/en/home", 
  title: "Welcome bonus of R10",
  description: "100% deposit bonus up to R1000",
  type: "Welcome",
  featured: true
  },


];

const categories = ["All", "Our Top Picks", "Welcome Bonuses", "Weekly"];

function CasinoCatalog() {
  const [promos, setPromos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setPromos(saPromos);
  }, []);

  const filtered = promos
    .filter((p) => {
      if (filter === "All") return true;
      if (filter === "Welcome Bonuses") return p.type === "Welcome";
      return p.type === filter;
    })
    .filter((p) => p.casino.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-5xl font-bold text-center mb-2 font-sans">the bonushunter</h1>
      <p className="text-center text-purple-400 text-md mb-6 font-light">
        Providing and updating you with the best South African Online Casinos and Gambling Sites of 2025:
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full transition ${
              filter === cat
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-purple-400 border border-purple-600 hover:bg-purple-700 hover:text-white"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
        <input
          type="text"
          placeholder="Search casinos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-full border border-purple-600 bg-gray-800 text-purple-300 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((promo) => (
          <div key={promo.id} className="bg-gray-300 text-gray-900 rounded-2xl shadow p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-3 font-sans">{promo.casino}</h2>
              {promo.logo && (
                <img src={promo.logo} alt={promo.casino} className="w-32 h-32 mb-4 object-contain" />
              )}
              <h3 className="text-lg font-bold mb-2 font-sans">{promo.title}</h3>
              <p className="text-base text-gray-800 font-normal mb-4 font-sans">
                {promo.description}
              </p>
            </div>
            <a
              href={promo.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-800 transition mt-auto"
            >
              Claim Offer
            </a>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-500 text-xs mt-12 px-4">
        Gambling can be addictive. Play responsibly. 18+ only. Offers subject to change. Always read terms and conditions.
      </p>
    </div>
  );
}

export default CasinoCatalog;
