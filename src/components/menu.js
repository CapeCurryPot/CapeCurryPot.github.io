import React, { useState } from "react"
import styled from "styled-components"

const mainData = [
  {
    price: "€12.00",
    name: "Chicken Curry mit Reis",
    description: "Aromatisches Cape-Malay Hähnchen-Curry mit Zimtreis. Mittel scharf",
  },
  {
    price: "€10.00",
    name: "Bobotie mit Reis (Vegetarisch)",
    description: "Ein süßlich-würziger Auflauf aus Linsen, Aprikosen und Mango mit einem Joghurt-Ei-Topping. Verfeinert mit einer erlesenen Auswahl an Gewürzen und mit Zimtreis serviert.",
  },
  {
    price: "€5.50",
    name: "Samosas",
    description: "Knusprige Teigtaschen, gefüllt mit Lamm- und Rinderhackfleisch, verfeinert mit frischem Koriander, Ingwer, Knoblauch und aromatischen, südafrikanischen Gewürzen. Mittel scharf",
  },
  {
    price: "€5.00",
    name: "Samosas (vegetarisch)",
    description: "Knusprige Teigtaschen, gefüllt mit einer Kartoffel-Erbsen-Füllung und verfeinert mit frischem  Koriander, Ingwer, Zitrone und aromatischen Gewürzen. Mittel scharf",
  },
  {
    price: "€5.00",
    name: "Samosas (vegetarisch)",
    description: "Knusprige Teigtaschen, gefüllt mit einer Kartoffel-Erbsen-Füllung und verfeinert mit frischem  Koriander, Ingwer, Zitrone und aromatischen Gewürzen. Mittel scharf",
  },
]
  const sideData = [
  {
    price: "€1.50",
    name: "Sambal",
    description: "Ein Relish-Vinaigrette aus Tomaten, Zwiebeln und Koriander. Die perfekte Beilage für Curries.",
  },
  {
    price: "€1.50",
    name: "Aprikosen-Pfirsich Chutney",
    description: "Authentisches Südafrikanisches Aprikosen-Pfirsich Chutney, das perfekt zu Bobotie passt! Leicht scharf",
  },
]
  const drinksData = [
  {
    price: "€2.80",
    name: "Fritz-Kola",
    description: "0.33L  8,45€/L, inkl. Pfand (0.08€)",
  },
  {
    price: "€2.80",
    name: "Fritz-Kola ohne Zucker",
    description: "0.33L  8,45€/L, inkl. Pfand (0.08€)",
  },
  {
    price: "€2.80",
    name: "Fritz-Limo Orange",
    description: "0.33L  8,45€/L, inkl. Pfand (0.08€)",
  },
  {
    price: "€2.80",
    name: "Vio Still",
    description: "0.5L  5.60€/L inkl. Pfand (0.25€)",
  },
  {
    price: "€2.80",
    name: "Vio Medium",
    description: "0.5L 5.60€/L inkl. Pfand (0.25€)",
  },
]
const categories = [
  {
    title: "Main",
    items: mainData,
  },
  {
    title: "Desserts",
    items: sideData
  },
  {
    title: "Drinks",
    items: drinksData
  },
]
const MenuStyles = styled.div`
  min-height: 100vh;
  padding-top: 40px;
  color: #404044;
  .menu-title-block {
    text-align: center;
    .menu-title {
      font-family: Lora;
    }
    p {
      color: #7d7d7d;
    }
  }

  .menu-item {
    .price {
      font-size: 24px;
      color: #404044;
      font-family: "Lora", Georgia, serif;
      margin: 0px;
    }
    .name {
      margin: 10px 0 10px 0;
      font-size: 16px;
      font-weight: 700;
    }
    .description {
      color: #7d7d7d;
      font-size: 14px;
      margin-bottom: 1.5em;
      font-weight: 400;
      font-family: "Poppins", Arial, sans-serif;
    }
  }

  .menu-items-block {
    max-width: 800px;
    margin: 15px auto;
    .menu-item {
      max-width: 300px;
      margin: auto;
    }
    @media (min-width: 1025px) {
      display: grid;
      grid-template-columns: 50% 50%;
    }
  }

  .menu-category {
    margin: auto;
    max-width: 800px;
    text-align: center;
    ul {
      margin: auto;
      li {
        list-style: none;
        display: inline-block;
        margin: 20px;
        position: relative;
        a,
        a:visited {
          text-decoration: none;
          color: #404044 !important;
        }
      }

      li.active a:after {
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        content: "";
        width: 100%;
        height: 2px;
        background: #ff6107;
        margin: 0 auto;
      }
    }
  }
`
const MenuComponent = () => {
  const [currentCategory, setCurrentCategory] = useState(categories[0])

  return (
    <MenuStyles>
      <div className="menu-title-block">
        <h2 className="menu-title">Our Delicious Menu</h2>
        <p>
          You have to enjoy the best food that money can buy all over the world
        </p>
      </div>
      <div className="menu-category">
        <ul>
          {categories.map((category, index) => {
            return (
              <li
                key={index}
                className={
                  currentCategory.title === category.title ? "active" : ""
                }
              >
                <a
                  href={`#${category.title}`}
                  onClick={e => {
                    e.preventDefault()
                    setCurrentCategory(category)
                  }}
                >
                  {category.title}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="menu-items-block">
        {currentCategory.items.map((data, index) => {
          return (
            <div className="menu-item" key={index}>
              <p className="price">{data.price}</p>
              <p className="name">{data.name}</p>
              <p className="description">{data.description}</p>
            </div>
          )
        })}
      </div>
    </MenuStyles>
  )
}

export default MenuComponent
