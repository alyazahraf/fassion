import React from 'react'
import { MdOutlineClose } from 'react-icons/md'

const Register = (props) => {
    return (
        <>
            <div className='overlay' onClick={() => { props.setIsRegisterOpen(false) }}>

            </div>
            <div className='modal' >
                <div className='register-container'>
                    <MdOutlineClose className='cancel' onClick={() => { props.setIsRegisterOpen(false) }} />
                    <div>
                        <h1 className='modal-title'>Daftar Sekarang</h1>
                        <div className='modal-login'>
                            <p className='akun'>Sudah punya akun Fassion? </p>
                            <a className='masuk'>Masuk</a>
                        </div>
                    </div>
                    <div className='modal-register'>
                        <div>
                            <p className='modal-input'>Email</p>
                            <input className='input' type="text" placeholder="email@fassion.com" />
                        </div>
                        <div>
                            <p className='modal-input'>Password</p>
                            <input className='input' type="text" />
                        </div>
                        <div className='approve'>
                            <input type='checkbox' />
                            <p className='daftar'>Dengan mendaftar, saya menyetujui <span>Syarat dan Ketentuan </span> serta <span>Kebijakan Privasi</span></p>
                        </div>
                        <div>
                            <button className='modal-button'>Daftar</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Register