import type { NextPage } from 'next'
import { Navbar } from 'components/Navbar'
import { Header } from '../components/Header/index';
import { BoxTag } from 'components/BoxTags';

import {
  ContainerHome,
  TitleApresentation,
  ContainerAbout,
  TextAbout,
  Enfase,
  ContainerInfo,
  PersonalInformation,
  InsideInfo,
  InsideInterest
} from '../styles/home';

import { 
  Airplane,
  Candy,
  Coffee,
  ControlerGame, 
  Headphones, 
  Laptop, 
  Money, 
  Study
} from 'components/Icons';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <ContainerHome>
        <TitleApresentation>
          <p className="title_back">Seja Bem vindo(a)!
            <br />
            <br />
            Me chamo Leandro,
            <br />
            <span>desenvolvedor Front End.</span>
          </p>
          <p className="title_front">Seja Bem vindo(a)!
            <br />
            <br />
            Me chamo Leandro,
            <br />
            <span>desenvolvedor Front End.</span>
          </p>
        </TitleApresentation>
        <img src="assets/dev_astronauta.svg" alt="" />
      </ContainerHome>

      <ContainerAbout>
        <Header
          title='Sobre mim'
          colorProps='green'
        />

        <TextAbout>
          <Enfase>Olá! Me chamo Leandro lombaldo da silva, </Enfase>
          33 anos, sou formado em análise e Desenvolvimento de Sistemas, sou desenvolvedor front end. Estou sempre em busca de conhecimento e aperfeiçoamento pessoal e profissional, melhorando minhas Soft Skills e Hard Skills. Sou uma pessoa que gosta de desafios e gosto de ser desafiado, acredito que isso faz o desenvolvimento ser mais rápido.
        </TextAbout>

        <ContainerInfo>
          <PersonalInformation>
            <p className='title'>Informações Pessoal</p>
            <InsideInfo>
              <div className="info">
                <p className="legend">Aniversário</p>
                <p className="dado">21-07-1989</p>
              </div>
              <div className="info">
                <p className="legend">Celular</p>
                <p className="dado"><Link href="tel:+5551996738230">+55 51 99673-8230</Link></p>
              </div>
              <div className="info">
                <p className="legend">Email</p>
                <p className="dado"><Link href="mailto:leandrosilva.hair@gmail.com">leandrosilva.hair@gmail.com</Link></p>
              </div>
              <div className="info">
                <p className="legend">Website</p>
                <p className="dado">Embreve</p>
              </div>
              <div className="info">
                <p className="legend">Localização</p>
                <p className="dado">Alvorada/RS/Brasil</p>
              </div>
              <div className="info">
                <p className="legend">Trabalho atual</p>
                <p className="dado">Delta Global SA</p>
              </div>
            </InsideInfo>
          </PersonalInformation>
          <PersonalInformation>
            <p className='title'>Meus Interesses</p>
            <InsideInterest>
              <BoxTag 
                icon={<ControlerGame />}
                hobbie='GAMES'
              />
              <BoxTag 
                icon={<Headphones />}
                hobbie='MÚSICA'
              />
              <BoxTag 
                icon={<Study />}
                hobbie='MÚSICA'
              />
              <BoxTag 
                icon={<Candy />}
                hobbie='DOCE'
              />
              <BoxTag 
                icon={<Coffee />}
                hobbie='CAFÉ'
              />
              <BoxTag 
                icon={<Airplane />}
                hobbie='VIAJAR'
              />
              <BoxTag 
                icon={<Laptop />}
                hobbie='TECNO'
              />
              <BoxTag 
                icon={<Money />}
                hobbie='DINHEIRO'
              />
            </InsideInterest>
          </PersonalInformation>
        </ContainerInfo>

      </ContainerAbout>
    </>
  )
}

export default Home
