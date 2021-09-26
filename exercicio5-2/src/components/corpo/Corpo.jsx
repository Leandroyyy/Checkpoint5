import { Borda, Sabores, Separar } from "../../styled";

export default function Corpo() {
  return (
    <>
      <Sabores>
        <Borda>
          <Separar>
            <div>
              <h2>Sabores</h2>
              <ul>
                <li>Chocolate</li>
                <li>Baunilha</li>
                <li>Napolitano</li>
                <li>Morango</li>
                <li>Pistache</li>
              </ul>
            </div>

            <div>
              <h2>Acompanhamentos</h2>
              <ul>
                <li>Cereja</li>
                <li>Balas Fini</li>
                <li>Marshmallow</li>
                <li>Brigadeiro</li>
                <li>Skittles</li>
              </ul>
            </div>
          </Separar>
        </Borda>
      </Sabores>
    </>
  );
}
