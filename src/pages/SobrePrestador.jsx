import NavBarPrestador from '../componentes/NavBarPrestador'

function SobrePrestador() {
  return (
    <div>
      <NavBarPrestador/> <br/>
<h1 className='titprinc'>Prestadores de Serviços</h1> <h1 className='titazul'>Disponíveis</h1>
<br/>
    <div class='flex-container'> 
        <div>
            <img src={imgfoto}/>
        </div>

        <div>
            <p></p>
        </div>

    </div>
</div>
  );
}

export default SobrePrestador;