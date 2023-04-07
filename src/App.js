import React, { useEffect, useState } from "react"
import "./App.css"
import Contact from "./components/Contact"

const App = () =>{

  // const contactList = [
  //   {
  //     id: 1,
  //     name: "Ganesh",
  //     number: 9052338999,
  //     isFav: false
  //   },
  //   {
  //     id: 2,
  //     name: "Iaslu",
  //     number: 6309338934,
  //     isFav: false
  //   },
  //   {
  //     id: 3,
  //     name: "Lucky",
  //     number: 8341353489,
  //     isFav: false
  //   },
  //   {
  //     id: 4,
  //     name: "Vijay",
  //     number: 7729044551,
  //     isFav: false
  //   },
  // ]

  // localStorage.setItem("contactData", JSON.stringify(contactList))

  const [contactList, setContactList] = useState([])
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")

  const getData = () =>{
    const contacts = localStorage.getItem("contactData")
    const contactsData = JSON.parse(contacts)
    setContactList(contactsData)
  }

  useEffect(() =>{
    getData()
  },[])

  const changeName = (event) =>{
    setName(event.target.value)
  }

  const changeNumber = (event) =>{
    setNumber(event.target.value)
  }

  const submitData = (event) =>{
    event.preventDefault()

    const newContact = {
      id: contactList.length + 1,
      name: name,
      number: number,
      isFav: false
    }

    localStorage.setItem("contactData", JSON.stringify([...contactList, newContact]))
    getData()
    setNumber("")
    setName("")
  }

  const clickDelete = (id) =>{
    const filterData = contactList.filter((each) => (each.id !== id))
    localStorage.setItem("contactData", JSON.stringify(filterData))
    getData()
  }

  const clickFav = (id, active) =>{
    const updatedContact = contactList.map((each) =>{
      if(each.id === id){
        return {...each, isFav: !active}
      }
      return each
    })

    console.log(updatedContact)
    localStorage.setItem("contactData", JSON.stringify(updatedContact))
    getData()

  }

  console.log(contactList)

  return(
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="heading">Contacts</h1>
        <form className="form" onSubmit={submitData} autoComplete="off">
          <div className="text-container">
            <label className="label" htmlFor="name">Name</label>
            <input className="input" onChange={changeName} value={name} id="name" type="text"/>
          </div>
          <div className="text-container">
            <label className="label" htmlFor="number">Number</label>
            <input className="input" onChange={changeNumber} value={number} id="number" type="text"/>
          </div>
          <button className="save-btn" type="submit">Save</button>
        </form>
        <ul className="list-container">
          {contactList.map(each =>(
            <Contact key={each.id} contacts={each} clickFav={clickFav} clickDelete={clickDelete}/>
          ))}
        </ul>
      </div>
    </div>
  )

}

export default App