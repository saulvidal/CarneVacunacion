const datos = [
    {
        codigo: "000001",
        nombre: "HILTON SAUL VIDAL SIFUENTES",
        dni: "DNI: 41370826",
        fechaNac: "05/04/1982",
        sexo: "M",
        fechaDosis1: "06/10/2021",
        fabriLote1: "SINOPHARM (202107B1919)",
        lugarVac1: "LIMA SUR - Estadio Galvez Chipoco - LIMA LIMA BARRANCO",
        fechaDosis2: "20/10/2021",
        fabriLote2: "SINOPHARM (B2021082360)",
        lugarVac2: "LIMA SUR - Estadio Galvez Chipoco - LIMA LIMA BARRANCO",
    },
    {
        codigo: "000002",
        nombre: "LADY DIANA CASAS HURTADO",
        dni: "DNI: 41615205",
        fechaNac: "20/02/1982",
        sexo: "F",
        fechaDosis1: "06/10/2021",
        fabriLote1: "SINOPHARM (202107B1919)",
        lugarVac1: "LIMA SUR - Estadio Galvez Chipoco - LIMA LIMA BARRANCO",
        fechaDosis2: "20/10/2021",
        fabriLote2: "SINOPHARM (B2021082360)",
        lugarVac2: "LIMA SUR - Estadio Galvez Chipoco - LIMA LIMA BARRANCO",
    },
    {
        codigo: "000003",
        nombre: "JESSICA ALEJANDRA VIDAL SIFUENTES",
        dni: "DNI: 47930292",
        fechaNac: "28/02/1993",
        sexo: "F",
        fechaDosis1: "06/10/2021",
        fabriLote1: "SINOPHARM (202107B1919)",
        lugarVac1: "LIMA SUR - Estadio Galvez Chipoco - LIMA LIMA BARRANCO",
        fechaDosis2: "20/10/2021",
        fabriLote2: "SINOPHARM (B2021082360)",
        lugarVac2: "LIMA SUR - Estadio Galvez Chipoco - LIMA LIMA BARRANCO",
    }
]

export const datosPersonales = datos;

const GET_NOMBRE_FROM_CODIGO = (codigo) => datos.filter(x => x.codigo === codigo)[0].nombre;
const GET_DNI_FROM_CODIGO = (codigo) => datos.filter(x => x.codigo === codigo)[0].dni;
const GET_FECHA_NAC_FROM_CODIGO = (codigo) => datos.filter(x => x.codigo === codigo)[0].fechaNac;
const GET_SEXO_FROM_CODIGO = (codigo) => datos.filter(x => x.codigo === codigo)[0].sexo;
const GET_FECHA_DOSIS_1_FROM_CODIGO = (codigo) => datos.filter(x => x.codigo === codigo)[0].fechaDosis1;
const GET_FABRI_LOTE_1_FROM_CODIGO = (codigo) => datos.filter(x => x.codigo === codigo)[0].fabriLote1;
const GET_LUGAR_VAC_1_FROM_CODIGO = (codigo) => datos.filter(x => x.codigo === codigo)[0].lugarVac1;
const GET_FECHA_DOSIS_2_FROM_CODIGO = (codigo) => datos.filter(x => x.codigo === codigo)[0].fechaDosis2;
const GET_FABRI_LOTE_2_FROM_CODIGO = (codigo) => datos.filter(x => x.codigo === codigo)[0].fabriLote2;
const GET_LUGAR_VAC_2_FROM_CODIGO = (codigo) => datos.filter(x => x.codigo === codigo)[0].lugarVac2;

export const codigos = datos.map(x=>x.codigo);

export const PERSONA_FROM_CODIGO = {
    GET_NOMBRE_FROM_CODIGO: GET_NOMBRE_FROM_CODIGO,
    GET_DNI_FROM_CODIGO: GET_DNI_FROM_CODIGO,
    GET_FECHA_NAC_FROM_CODIGO: GET_FECHA_NAC_FROM_CODIGO,
    GET_SEXO_FROM_CODIGO: GET_SEXO_FROM_CODIGO,
    GET_FECHA_DOSIS_1_FROM_CODIGO: GET_FECHA_DOSIS_1_FROM_CODIGO,
    GET_FABRI_LOTE_1_FROM_CODIGO: GET_FABRI_LOTE_1_FROM_CODIGO,
    GET_LUGAR_VAC_1_FROM_CODIGO: GET_LUGAR_VAC_1_FROM_CODIGO,
    GET_FECHA_DOSIS_2_FROM_CODIGO: GET_FECHA_DOSIS_2_FROM_CODIGO,
    GET_FABRI_LOTE_2_FROM_CODIGO: GET_FABRI_LOTE_2_FROM_CODIGO,
    GET_LUGAR_VAC_2_FROM_CODIGO: GET_LUGAR_VAC_2_FROM_CODIGO,
}

