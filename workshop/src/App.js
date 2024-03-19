import React from 'react'
import Input from "./components/Input";
import Logo from './assets/logo.svg'
import Github from './assets/github.svg'
import Wpp from './assets/wpp.svg'


function App() {
  return (
    <div className="flex flex-col min-h h-screen w-full items-center justify-center mt-10">
      <div className="flex flex-col min-h h-screen w-full items-center justify-center mt-10">
      <div className='pb-3 items-center justify-center pt-10'>
      <img src={Logo} alt='logoInteli' className='w-[100%] h-[100%] max-w-[750px] relative my-10 pt-10'/>
      </div>
      </div>
      <div className='flex flex-col bg-[#343459] rounded-md max-w-[500px]'>
        <div className='text-white flex flex-col justify-between gap-y-3 px-5 pb-10 pt-8 opacity-90'>
          <h1 className='font-semibold  text-2xl just'>Receba sua Proof-Of-Attandance NFT</h1>
          <p className='text-base'>Para receber sua NFT você precisa ter participado do evento e ter uma carteira na rede Sepolia.</p>
          <p className='text-base'>Ainda não tem uma carteira? Acesse o link e crie a sua já:<br/> <a className='text-blue-600' href='https://metamask.io/download/'>Clique aqui.</a></p> 
        </div>

        <div className='px-5 flex flex-col justify-between gap-y-4'>
        <Input description="Esse nome será gravado no NFT para provar sua presença" placeholder="Nome:" label="Seu nome"/>
        <Input description="Email para receber novidades" placeholder="your.email@email.com" label="Email"/>
        <Input description="Carteira para receber o NFT na rede Sepolia" placeholder="0x00...0000" label="Wallet"/>
        </div>
        <div className='px-5 py-5'>
          <button className='bg-[#00A3FF] text-white w-full py-2 rounded-md font-semibold'>Gerar NFT</button>
        </div>
      </div>
      <div className='content-center flex-col flex items-center pt-4'>
        <div className='flex flex-row justify-center '>
          <p className='text-white text-center text-sm pb-5'>Todo o código pode ser encontrado aqui:</p>
          <img src={Github} alt='github' className='w-[16px] h-[16px] mt-1 ml-2'/>
        </div>
        <div className='flex flex-row justify-center'>
          <p className='text-white text-center text-sm pb-5'>Caso tenha alguma dúvida:</p>
          <img src={Wpp} alt='zap' className='w-[16px] h-[16px] mt-1 ml-2'/>
        </div>
        </div>
    </div>
  );
}

export default App;
