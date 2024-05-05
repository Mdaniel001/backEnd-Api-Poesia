//creo la data de libros poesia

    let poesiaData =[

        {
            titulo: "Cien sonetos de amor",
            autor: "Pablo Neruda",
            fecha_de_edicion: "1959",
            pais: "Chile",
            link_internet: "https://example.com/cien-sonetos-de-amor",
            tipo_de_poesia: "Sonetos"
        },
        {
            titulo: "Hoja por hoja",
            autor: "Octavio Paz",
            fecha_de_edicion: "1958",
            pais: "México",
            link_internet: "https://example.com/hoja-por-hoja",
            tipo_de_poesia: "Lírica"
        },
        {
            titulo: "Veinte poemas de amor y una canción desesperada",
            autor: "Pablo Neruda",
            fecha_de_edicion: "1924",
            pais: "Chile",
            link_internet: "https://example.com/veinte-poemas-de-amor",
            tipo_de_poesia: "Lírica"
        },
        {
            titulo: "Las mil y una noches",
            autor: "Anónimo",
            fecha_de_edicion: "Siglo IX-X",
            pais: "Persia",
            link_internet: "https://example.com/las-mil-y-una-noches",
            tipo_de_poesia: "Narrativa"
        },
        {
            titulo: "Poemas humanos",
            autor: "César Vallejo",
            fecha_de_edicion: "1939",
            pais: "Perú",
            link_internet: "https://example.com/poemas-humanos",
            tipo_de_poesia: "Lírica"
        },
        {
            titulo: "La divina comedia",
            autor: "Dante Alighieri",
            fecha_de_edicion: "Siglo XIV",
            pais: "Italia",
            link_internet: "https://example.com/la-divina-comedia",
            tipo_de_poesia: "Épica"
        },
        {
            titulo: "Rimas",
            autor: "Gustavo Adolfo Bécquer",
            fecha_de_edicion: "1868",
            pais: "España",
            link_internet: "https://example.com/rimas",
            tipo_de_poesia: "Lírica"
        },
        {
            titulo: "El principito",
            autor: "Antoine de Saint-Exupéry",
            fecha_de_edicion: "1943",
            pais: "Francia",
            link_internet: "https://example.com/el-principito",
            tipo_de_poesia: "Narrativa poética"
        },
        {
            titulo: "Poeta en Nueva York",
            autor: "Federico García Lorca",
            fecha_de_edicion: "1940",
            pais: "España",
            link_internet: "https://example.com/poeta-en-nueva-york",
            tipo_de_poesia: "Lírica"
        },
        {
            titulo: "Los versos satánicos",
            autor: "Salman Rushdie",
            fecha_de_edicion: "1988",
            pais: "Reino Unido",
            link_internet: "https://example.com/los-versos-satanicos",
            tipo_de_poesia: "Sátira"
        }



    ]
// instanciamos cada una de las funciones 

const getLibro = (req, res) =>{
res.status(200).json(poesiaData)

}

const getLibroByTitulo = (req, res) => {
    const { titulo } = req.params;
    const libro = poesiaData.find(libro => libro.titulo === titulo);
    if (libro) {
        res.status(200).json(libro);
    } else {
        res.status(404).send('Libro no encontrado');
    }
}

const postLibro = (req, res) => {
    const { titulo, autor, fecha_de_edicion, pais, link_internet, tipo_de_poesia } = req.body;
    poesiaData.push({ titulo, autor, fecha_de_edicion, pais, link_internet, tipo_de_poesia });
    res.send('Tu Libro de Poesía se Agregó Correctamente');
};


const deleteLibro = (req, res) => {
    const { titulo } = req.params;
    poesiaData = poesiaData.filter(libro => libro.titulo !== titulo);
    res.send('Libro eliminado correctamente');
};


const putLibro = (req, res) => {
    const { titulo } = req.params;
    const { autor, fecha_de_edicion, pais, link_internet, tipo_de_poesia } = req.body;
    
    // Buscar el índice del libro en el arreglo
    const index = poesiaData.findIndex(libro => libro.titulo === titulo);

    // Si se encuentra el libro
    if (index !== -1) {
        // Actualizar los datos del libro
        poesiaData[index] = {
            titulo,
            autor: autor || poesiaData[index].autor, // Conservar el valor anterior si no se proporciona uno nuevo
            fecha_de_edicion: fecha_de_edicion || poesiaData[index].fecha_de_edicion,
            pais: pais || poesiaData[index].pais,
            link_internet: link_internet || poesiaData[index].link_internet,
            tipo_de_poesia: tipo_de_poesia || poesiaData[index].tipo_de_poesia
        };
        res.send('Libro actualizado correctamente');
    } else {
        res.status(404).send('Libro no encontrado');
    }
};




//exporto las funciones instanciadas

module.exports ={
    getLibro,
    getLibroByTitulo,
    postLibro,
    deleteLibro,
    putLibro
}
