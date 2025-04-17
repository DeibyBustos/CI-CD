import React from 'react'
import MediaView from '../components/MediaView'


const Gallery = ({ category }) => {



  const galleryData = [

    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/%22La_noche_estrellada%22_de_Van_gogh.jpg/250px-%22La_noche_estrellada%22_de_Van_gogh.jpg',
      title: 'img1',
      type: 'image',
      category: 'art'
    },
    {
      url: 'https://ethic.es/wp-content/uploads/2022/12/vangog-2.jpg',
      title: 'img2',
      type: 'image',
      category: 'art'
    },
    {
      url: 'https://www.landuum.com/wp-content/uploads/2020/08/Imagen-2-La-gran-ola-de-Kanagawa.jpg',
      title: 'img3',
      type: 'image',
      category: 'art'
    },
    {
      url: 'https://media.revistaad.es/photos/60c745c1f8ba795ce91acd92/master/w_1600%2Cc_limit/196890.jpg',
      title: 'img4',
      type: 'image',
      category: 'art'
    },
    {
      url: 'https://static01.nyt.com/images/2023/05/30/well/30WELL-ART-BRAIN-esp/30WELL-ART-BRAIN-videoSixteenByNineJumbo1600.jpg',
      title: 'img5',
      type: 'image',
      category: 'art'
    },
    {
      url: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/9db5/live/48fd9010-c1c1-11ee-9519-97453607d43e.jpg.webp',
      title: 'img1',
      type: 'image',
      category: 'nature',
    },
    {
      url: 'https://static.vecteezy.com/system/resources/thumbnails/027/793/484/small/young-plant-growing-in-the-morning-light-and-green-nature-free-photo.jpg',
      title: 'img2',
      type: 'image',
      category: 'nature',
    },
    {
      url: 'https://media.istockphoto.com/id/517188688/es/foto/paisaje-de-monta%C3%B1a.jpg?s=612x612&w=0&k=20&c=EnSd5sJdxih_svZHscQ5Hfzr3RSOdXO9MpdmKK4CMTs=',
      title: 'img3',
      type: 'image',
      category: 'nature',
    },
    {
      url: 'https://cdn.forbes.com.mx/2017/02/destinos-naturaleza-copia.jpg',
      title: 'img4',
      type: 'image',
      category: 'nature',
    },
    {
      url: 'https://static.vecteezy.com/system/resources/thumbnails/006/240/296/small/idyllic-mountain-landscape-with-fresh-green-meadows-and-blooming-wildflowers-idyllic-nature-countryside-view-rural-outdoor-natural-view-idyllic-banner-nature-panoramic-spring-summer-scenery-photo.jpg',
      title: 'img5',
      type: 'image',
      category: 'nature',
    },
    {
      url: 'https://cdn0.ecologiaverde.com/es/posts/7/3/4/y_de_techo_las_estrellas_437_0_600.jpg',
      title: 'img6',
      type: 'image',
      category: 'nature',
    },
    {
      url: 'https://www.ecoavant.com/uploads/s1/28/20/68/imagen-de-que-es-la-naturaleza.webp',
      title: 'img7',
      type: 'image',
      category: 'nature',
    },
    {
      url: 'https://alimentaods.org/wp-content/uploads/2021/05/Naturaleza_Felix-Mittermeier_Pexels.jpg',
      title: 'img8',
      type: 'image',
      category: 'nature',
    },
    {
      url: 'https://www.youtube.com/watch?v=xFxMx7DsqP0',
      title: 'video1',
      type: 'video',
      category: 'nature',
      thumbnail: 'https://img.youtube.com/vi/xFxMx7DsqP0/0.jpg'
    },
    {
      url:'https://www.raeeandalucia.es/sites/default/files/images/modern-stationary-collection-arrangement_1.jpg',
      title: 'img1',
      type: 'image',
      category: 'tech'
    },
    {
      url:'https://www.thenocgroup.com/wp-content/uploads/2023/03/dispositivos_ectronicos_thenoc.jpg',
      title: 'img2',
      type: 'image',
      category: 'tech'
    },
    {
      url:'https://dukx4ewcvnyp6.cloudfront.net/wp-content/uploads/2023/07/importar-aparatos-electronicos-baterias.webp',
      title: 'img3',
      type: 'image',
      category: 'tech'
    },
    {
      url:'https://us.123rf.com/450wm/naonovoa/naonovoa2002/naonovoa200200259/150558242-composici%C3%B3n-de-montaje-plano-con-equipo-de-producci%C3%B3n-fotogr%C3%A1fica-sobre-fondo-blanco-liso-vista.jpg?ver=6',
      title: 'img4',
      type: 'image',
      category: 'tech'
    },
    {
      url:'https://img.freepik.com/foto-gratis/concepto-escritorio-flat-lay-plantilla-smartphone_23-2148111335.jpg',
      title: 'img5',
      type: 'image',
      category: 'tech'
    }
    
  ]

  return (
    <div>
    <MediaView data={galleryData} category={category} />
    </div>
  )
}

export default Gallery
