/*
  Hello, change the text inside these variables to update
  the content of the website.

  For images, you can type the path to a file inside
  the images folder in /public/images. To do that, 
  just type "/images/[imageName].extension" inside
  the variable. Otherwise, you can insert an url
  from a website, and in this case you need to include
  that domain in next.config.js

  Thank You!
*/

// ---GENERAL---
export const logo = "/images/logo.png"
export const logoAlt = "nft project logo"
export const mobileMenuHeading = "Useful Links:"

export const discordUrl = "https://discord.gg/XDJZcHAVsm"
export const instagramUrl = "#"
export const twitterUrl = "https://twitter.com/NeternOne"
export const openSeaUrl = "#"

// ---NAVBAR---
export const pages = [
  { name: "Gallery", id: "#gallery" },
  { name: "Features", id: "#features" },
  { name: "Roadmap", id: "#roadmap" },
  { name: "Team", id: "#team" },
  { name: "FAQ", id: "#faq" },
]

// ---FOOTER---
export const permissions = "2022 Netern"

// ---HERO TEXT---
export const heading1 = "Netern"
export const heading2 = "NFT Project"
export const description = `
  Meet a collection of 100+ amazing character
  with different attributes and styles!
`
export const btnText1 = "Join Discord"
export const btnText2 = "Shop on MetaMirror"

export const topCard = {
  name: "#103",
  price: "5000 $ROSE",
  btnText: "Buy Now",
  profile:
    "https://lh3.googleusercontent.com/uRNiQu5_VpjhHoYy_QTvqOpIWs5QvSJ36hCrsGV4jP2YDJqIwfBVtR_XALDmmHHyFks6FC919AzvXv0J1AT4WlSEGM6VIODNt07snw=s130",
  image:
    "https://lh3.googleusercontent.com/kmjIhSulTiy42-JY6HVCeQvDwY8Q0ifNi3zt4i_9gL03mmwsHNituGpe5QA9bIm_vxHeuM8dlBgcPXTT=w221-h220-rw",
  btnUrl: "https://opensea.io/",
  alt: "Top Card",
  profileAlt: "My Profile 1",
}

export const backCard = {
  name: "#102",
  price: "5000 $ROSE",
  btnText: "Buy Now",
  profile:
    "https://lh3.googleusercontent.com/uRNiQu5_VpjhHoYy_QTvqOpIWs5QvSJ36hCrsGV4jP2YDJqIwfBVtR_XALDmmHHyFks6FC919AzvXv0J1AT4WlSEGM6VIODNt07snw=s130",
  image:
    "https://lh3.googleusercontent.com/evzwlFnaG6h_ASUzjP17puKn9JGTc-8fNsb-Xdd0p_lyupusl8-ONY4fbT_TumjXP7fiTbC74RyBX0y4=w221-h220-rw",
  btnUrl: "https://opensea.io/",
  alt: "Back Card",
  profileAlt: "My Profile 2",
}

// ---GALLERY---
export const galleryHeading = "Gallery"
export const images = [
  {
    url: "https://lh3.googleusercontent.com/kmjIhSulTiy42-JY6HVCeQvDwY8Q0ifNi3zt4i_9gL03mmwsHNituGpe5QA9bIm_vxHeuM8dlBgcPXTT=w221-h220-rw",
    alt: "nft1",
  },
  {
    url: "https://lh3.googleusercontent.com/kmjIhSulTiy42-JY6HVCeQvDwY8Q0ifNi3zt4i_9gL03mmwsHNituGpe5QA9bIm_vxHeuM8dlBgcPXTT=w221-h220-rw",
    alt: "nft2",
  },
  {
    url: "https://lh3.googleusercontent.com/kmjIhSulTiy42-JY6HVCeQvDwY8Q0ifNi3zt4i_9gL03mmwsHNituGpe5QA9bIm_vxHeuM8dlBgcPXTT=w221-h220-rw",
    alt: "nft3",
  },
  {
    url: "https://lh3.googleusercontent.com/kmjIhSulTiy42-JY6HVCeQvDwY8Q0ifNi3zt4i_9gL03mmwsHNituGpe5QA9bIm_vxHeuM8dlBgcPXTT=w221-h220-rw",
    alt: "nft4",
  },
  {
    url: "https://lh3.googleusercontent.com/kmjIhSulTiy42-JY6HVCeQvDwY8Q0ifNi3zt4i_9gL03mmwsHNituGpe5QA9bIm_vxHeuM8dlBgcPXTT=w221-h220-rw",
    alt: "nf5",
  },
  {
    url: "https://lh3.googleusercontent.com/kmjIhSulTiy42-JY6HVCeQvDwY8Q0ifNi3zt4i_9gL03mmwsHNituGpe5QA9bIm_vxHeuM8dlBgcPXTT=w221-h220-rw",
    alt: "nft6",
  },
]

// ---FEATURES---
export const features = [
  {
    reversed: false,
    title: "100+ FIgures Collection",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.`,
    image:
      "https://ouch-cdn2.icons8.com/CCMXcYfslPpvGqO0olPsDxuYq5zjVyHTbhpIbcfN4bQ/rs:fit:735:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTQ5/LzM3YmUzODE5LTM2/OTEtNDdjNy05YTMz/LWVjMTYwMjA0YTU1/ZS5wbmc.png",
    imageAlt: "100+ FIgures Collection Image",
  },
  {
    reversed: true,
    title: "Unique Attributes",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.`,
    image:
      "https://ouch-cdn2.icons8.com/v6BET7YrOgSq4VCaZKo2L6mVaGxu1oJ0aoH9NzGvKqk/rs:fit:1149:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTQw/LzVhYTljZWRhLTdm/ZjUtNDM1MC1hNjA0/LWU3OTc1NjZiYTJl/ZC5wbmc.png",
    imageAlt: "Unique Attributes Image",
  },
]

// ---ROADMAP---
export const roadmapHeading = "Roadmap"
export const roadmapSteps = [
  {
    position: "1",
    title: "30% $ROSE Donation",
    description: `
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
      veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
    `,
  },
  {
    position: "2",
    title: "Perspiciatis unde omnis istes",
    description: `
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
      veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
    `,
  },
  {
    position: "3",
    title: "All NFTs Sold",
    description: `
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
      veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
    `,
  },
]

// ---TEAM---
export const teamHeading = "Team"
export const team = [
  {
    url: "https://lh3.googleusercontent.com/2758-A5gXsEKIs8k2UuuZhk4rZWJ4XSSLfJEPPSnPlCT5jpKwSleCzOTKRNDQcR-Bm58Wg8dMs7Qc1KyRw=s220-rw",
    alt: "user1",
    username: "@netern#0787",
    userLink: "https://discord.gg/XDJZcHAVsm",
  },
  {
    url: "https://lh3.googleusercontent.com/kmjIhSulTiy42-JY6HVCeQvDwY8Q0ifNi3zt4i_9gL03mmwsHNituGpe5QA9bIm_vxHeuM8dlBgcPXTT=w221-h220-rw",
    alt: "user2",
    username: "@Oasis#7505",
    userLink: "https://twitter.com/elonmusk",
  },
  {
    url: "https://lh3.googleusercontent.com/evzwlFnaG6h_ASUzjP17puKn9JGTc-8fNsb-Xdd0p_lyupusl8-ONY4fbT_TumjXP7fiTbC74RyBX0y4=w221-h220-rw",
    alt: "user3",
    username: "@KayaMain#5671",
    userLink: "https://twitter.com/elonmusk",
  },
  {
    url: "https://lh3.googleusercontent.com/DpdCB9hFrLvIcyALvD4z603xIxQ3AKgG6Wv9AG_ET43x1xYcNupIYs-4wgzlshBgYGFKCmDf45PAqPs-=w221-h220-rw",
    alt: "user4",
    username: "@Megaman#3527",
    userLink: "https://twitter.com/elonmusk",
  },
]

// ---FAQ---
export const faqHeading = "Frequently Asked Questions"
export const faq = [
  {
    question: "What is Netern?",
    answer: `Netern is a collection of 100+ amazing characters with
             different attributes and styles hosted on Emerald Blockchain. 
             You can buy these figures on MetaMirror.
    `,
  },
  {
    question: "How much do they Cost?",
    answer: `Netern is a collection of 100+ amazing figures with
             different attributes and styles hosted on Emerald Blockchain. 
             You can buy these figures on MetaMirror.
    `,
  },
  {
    question: "Can I buy an NFT from Opensea?",
    answer: `Netern is a collection of 100+ amazing figures with
             different attributes and styles hosted on Emerald Blockchain. 
             You can buy these figures on MetaMirror.
    `,
  },
]
