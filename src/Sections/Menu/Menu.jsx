import React from 'react'
import axios from 'axios'
import './Menu.css'
import { HeadingBackground, Kola, MenuTea } from '../../Assets'
function Menu() {
  const [menu, setMenu] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [selection, setSelection] = React.useState('cofee')
  React.useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/anshinx/react-hasbihall/menu-json/menufs',
      )
      .then((res) => {
        setMenu(res.data)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  console.log(menu)

  const imageArray = {
    cofee: HeadingBackground,
    hots: MenuTea,
    cold: Kola,
    meals: HeadingBackground,
    desserts: HeadingBackground,
  }

  return (
    <div>
      {loading ? (
        <h1>Lütfen Bekleyin...</h1>
      ) : (
        <>
          <label
            onClick={() => {
              setSelection('hots')
            }}
          >
            <h2 className="menu_label">Sıcak İçecekler</h2>
          </label>
          <label
            onClick={() => {
              setSelection('cold')
            }}
          >
            <h2 className="menu_label">Soğuk İçecekler</h2>
          </label>
          <label
            onClick={() => {
              setSelection('cofee')
            }}
          >
            <h2 className="menu_label">Dünya Kahveleri</h2>
          </label>
          <label
            onClick={() => {
              setSelection('cofee')
            }}
          >
            <h2 className="menu_label">Türk Kahveleri</h2>
          </label>
          <label
            onClick={() => {
              setSelection('meals')
            }}
          >
            <h2 className="menu_label"> Yiyecekler</h2>
          </label>
          <label
            onClick={() => {
              setSelection('desserts')
            }}
          >
            <h2 className="menu_label"  >Tatlılar</h2>
          </label>
          <div>
            <img
              src={imageArray[selection]}
              alt=""
              class="heading_background"
            />

            {menu[selection].map((item) => (
              <div key={item.id} className="menu_item_array">
                <h4>{item.name} &nbsp; -- &nbsp; </h4>
                <h5> {item.price}₺</h5>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Menu
