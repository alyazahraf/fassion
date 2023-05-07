import axios from 'axios'
import React from 'react'
import { useState } from 'react'


const Store = () => {
    const [name, setName] = useState('')
    const [logo, setLogo] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')
    const [description, setDescription] = useState('')
    const [VA, setVA] = useState('')

    const handleSubmit = () => {
        console.log({ name, logo, address, contact, description, VA })
        axios.post('http://127.0.0.1:8000/api/openStore', {
            name: name,
            logo: logo,
            address: address,
            contact: contact,
            description: description,
            VA: VA
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('access_token')
            }
        })
            .then(result => {
                console.log(result.data)
                alert('Open Store Success')
            }
            )
            .catch(error => {
                console.log(error.response)
                alert('Open Store Failed')
            })
    }

    return (
        <div className='px-8 py-24 lg:top-10 lg:px-36 lg:py-24 bg-light-gray'>
            <div className='lg:px-24 py-10  gap-12 flex flex-col border rounded-xl border-blue-gray bg-white'>
                <div className='align-center text-center lg:border-b'>
                    <h1 className='text-2xl text-dark-blue pb-2'>Setup Your Store Information</h1>
                </div>

                <div className='profile-item-list'>
                    <div className='profile-input'>
                        <h3 className='list-input'>Store Name</h3>
                        <input className='input text-input' type="text" value={name} onChange={(e) =>
                            setName(e.target.value)} required />
                    </div>
                    <div className='flex flex-row gap-80  items-center'>
                        <h3 className='list-input'>Logo</h3>
                        <div className='pl-10'>
                            <input type="file" id='file' className='hidden' value={logo} onChange={(e) => setLogo(e.target.value)} />
                            <label className='w-fit modal-button px-6 py-2 ' for="file" value={logo} onChange={(e) => setLogo(e.target.value)}>Choose File</label>
                        </div>
                    </div>
                    <div className='profile-input'>
                        <h3 className='list-input'>Address</h3>
                        <input className='input text-input' type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className='profile-input'>
                        <h3 className='list-input'>Contact</h3>
                        <input className='input text-input' type="number" value={contact} onChange={(e) => setContact(e.target.value)} />
                    </div>
                    <div className='profile-input'>
                        <h3 className='list-input'>Description</h3>
                        <input className='input text-input' type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className='profile-input'>
                        <h3 className='list-input'>Virtual Account</h3>
                        <input className='input text-input' type="number" value={VA} onChange={(e) => setVA(e.target.value)} />
                    </div>
                </div>
                <div className='flex justify-end pr-10'>
                    <button className='w-fit modal-button px-6 py-2' onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </div>

    )
}

export default Store