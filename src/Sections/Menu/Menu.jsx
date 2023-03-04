import React from 'react'
import axios from 'axios'
import './Menu.css'
import { HeadingBackground, Kola, MenuTea } from '../../Assets'
function Menu() {
  const [menu, setMenu] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [selection, setSelection] = React.useState('hots')
  React.useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/anshinx/atkafasimenu/master/public/menu.json',
      )
      .then((res) => {
        setMenu(res.data)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  console.log(menu)



  return (
    <div>
      {loading ? (
        <h1>Lütfen Bekleyin...</h1>
      ) : (
        <>
          <div className='menu_selections'>

            <label
              onClick={() => {
                setSelection('hots')

              }}
            >
              <a href="#menu_content" className={selection !== "hots" ? "menu_label" : "selected"}>Sıcak İçecekler </a>
            </label>
            <br />
            <label
              onClick={() => {
                setSelection('chocolate')
              }}
            >
              <a href="#menu_content" className={selection !== "chocolate" ? "menu_label" : "selected"}>Çikolatalar </a>
            </label>
            <br />
            <label
              onClick={() => {
                setSelection('colds')
              }}
            >
              <a href="#menu_content" className={selection !== "colds" ? "menu_label" : "selected"}>Soğuk İçecekler </a>
            </label>
            <br />
            <label
              onClick={() => {
                setSelection('cofeeWorld')
              }}
            >
              <a href="#menu_content" className={selection !== "cofeeWorld" ? "menu_label" : "selected"}>Dünya Kahveleri </a>
            </label>
            <br />
            <label
              onClick={() => {
                setSelection('cofeeTurkish')
              }}
            >
              <a href="#menu_content" className={selection !== "cofeeTurkish" ? "menu_label" : "selected"}>Türk Kahveleri </a>
            </label>
            <br />
            <label
              onClick={() => {
                setSelection('apetizers')
              }}
            >
              <a href="#menu_content" className={selection !== "apetizers" ? "menu_label" : "selected"}> Aperatifler </a>
            </label>
            <br />
            <label
              onClick={() => {
                setSelection('salads')
              }}
            >
              <a href="#menu_content" className={selection !== "salads" ? "menu_label" : "selected"}> Salatalar </a>
            </label>
            <br />
            <label
              onClick={() => {
                setSelection('pasta')
              }}
            >
              <a href="#menu_content" className={selection !== "pasta" ? "menu_label" : "selected"}> Makarnalar </a>
            </label>
            <br />
            <label
              onClick={() => {
                setSelection('meals')
              }}
            >
              <a href="#menu_content" className={selection !== "meals" ? "menu_label" : "selected"}> Ana Yemekler </a>
            </label>
            <br />
            <label
              onClick={() => {
                setSelection('desserts')
              }}
            >
              <a href="#menu_content" className={selection !== "desserts" ? "menu_label" : "selected"}  >Tatlılar </a>
            </label>
          </div>
          <div id='menu_content'>



            {menu[selection].map((item) => {
              console.log(item);
              return (
                <div key={item.id} className="menu_item_array">
                  <h4  >{item.name}   - </h4>
                  <br />
                  <h5>-  {item.price}₺</h5>
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default Menu
