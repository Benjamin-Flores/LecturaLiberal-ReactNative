import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList, Image, TouchableHighlight, Modal, 
} from "react-native";
import Constants from "expo-constants";
import normalize from 'react-native-normalize';





const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    marginHorizontal: 0,
    flexDirection: 'row',
    backgroundColor: '#231F20',
  },
  mainContainer: {
    flexDirection: 'row',
    marginTop: Constants.statusBarHeight,
    borderBottomColor: 'white',
    borderBottomWidth: normalize(4),
    paddingBottom: Constants.statusBarHeight,
    
    
  },
  pictureContainer: {
    flex: 2,
  },
  firstPicture: {
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 0.5,
    flex: 1,
    width: normalize(140),
    height: normalize(180),
    marginLeft: '2%',
  },
  textContaner: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'center'
    
    
  },
  nameTitle: {
    fontSize: normalize(22),
    fontWeight: 'bold',
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    color: 'white'
  },
  textPicture: {
    color: 'white',
    fontSize: normalize(20),
    marginLeft: '5%',
    marginTop: '5%'
  },
  textDate:{
    marginLeft: '5%',
    marginTop: '5%',
    color: 'white',
    fontSize: normalize(20),
  },
  flag: {
    width: normalize(30),
    height: normalize(20),
    
  },
  buttonsContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginLeft: '5%',
  
  },
  highlightButton: {

    borderWidth: normalize(4),
    borderColor: 'white',
    borderRadius: normalize(5),
    padding: normalize(8),
    marginTop: '10%',
    marginRight: '5%'


  },
  buttonText:{
    color: 'white',
    borderRadius: normalize(5),
    fontSize: normalize(20),
    fontWeight: 'bold'
  },
  specialImage: {
    width: normalize(220),
    height: normalize(260),
    marginTop: '5%',
    marginBottom: '5%',
    borderWidth: normalize(3),
    borderColor: 'white', 
    borderRadius: normalize(5)}
  

 
});





const DATA = [
  {
    title: "John Locke",
    data: [
      {key: '1', 
      country: 'Reino Unido',
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderareinounido.png')} />, 
      date: '1632-1704',
      bio: 'John Locke fue un filósofo y médico inglés, considerado como uno de los más influyentes pensadores del empirismo inglés y conocido como el Padre del Liberalismo Clásico. Su trabajo afectó en gran medida el desarrollo de la epistemología y la filosofía política. Sus escritos influyeron en Voltaire y Rosseau, pensadores de la ilustración francesa.',
      sentence: 'EL Gobierno no debe tener otra finalidad que la preservación de la propiedad',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/johnlockee.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/johnlocke1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/18TtZvBp6DV9msNt-k_qMaLiMrIfxE3OV?usp=sharing'
     
     }
    ]
  },
  {
    title: "Adam Smith",
    data: [
      {key: '2', 
      country: 'Reino Unido', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderareinounido.png')} />,
      date: '1723-1790',
      bio: 'Adam Smith fue un economista y filósofo escocés, considerado uno de los mayores exponentes de la economía clásica y de la filosofía de la economía. Gracias a su obra "La Riqueza de las Naciones" se le conoce como el Padre de la Economía Moderna dado que fue el primer estudio completo y sistemático acerca de la creación y acumulación de la riqueza.',
      sentence: 'No puede haber una Sociedad floreciente y feliz cuando la mayor parte de sus miembros son pobres y desdichados',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/adamsmithh.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/adamsmith1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/14QZpI4VX47Iw-93kHjmlRh6pgIbteDxE?usp=sharing'
     }
    ]
  },
  {
    title: "Thomas Paine",
    data: [
      {key: '3', 
      country: 'Reino Unido', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderareinounido.png')} />,
      date: '1737-1790',
      bio: 'Thomas Paine fue un filósofo y escritor político nacido en Inglaterra que apoyó las causas revolucionarias en América y Europa. Publicado en 1776 con reconocimiento internacional, Sentido Común fue el primer folleto que abogó por la independencia estadounidense. Fue promotor del liberalismo, la democracia y es considerado uno de los Padres Fundadores.',
      sentence: 'Las mayores tiranías se perpetúan siempre en nombre de las causas más nobles.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/thomaspainee.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/thomaspaine1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1P8skVWgjjzn4pfQW-9K0CBIhv_vHRHxW?usp=sharing'
     }
    ]
  },
  {
    title: "Benjamin Constant",
    data: [
      {key: '4', 
      country: 'Suiza', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderasuiza.png')} />,
      date: '1767-1830',
      bio: 'Henri Benjamin Constant de Rebecque fue un escritor y político francés. Procedente de una desarraigada familia de protestantes franceses emigrados a Suiza, recibió una educación cosmopolita pasando por las Universidades de Oxford, Erlangen y Edimburgo. Su afición política inicio en el periodo de la Revolución Francesa. Defendió siempre el Liberalismo.',
      sentence: 'La libertad no es otra cosa que aquello que la sociedad tiene el derecho de hacer y el estado no tiene el derecho de impedir.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/benjaminconstantderebecquee.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/benjaminconstantderebecque1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/19DxnbTgLcRoMbL_DL9j8Z54zXHEVgS07?usp=sharing'
     }
    ]
  },
  {
    title: "David Ricardo",
    data: [
      {key: '5', 
      country: 'Reino Unido', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderareinounido.png')} />,
      date: '1772-1823',
      bio: 'David Ricardo fue un economista Inglés de origen judío sefardí-portugués, miembro de la corriente de pensamiento clásico económico y uno de los más influyentes junto a Adam Smith y Thomas Malthus. Es considerado uno de los pioneros de la Macroeconomía moderna por su análisis de la relación entre beneficios y salarios. También fue exitoso empresario.',
      sentence: 'La mayoría de los bienes que son objetos de deseo se procuran mediante el trabajo, y pueden ser multiplicados, no solamente en una nación, sino en muchas, casi sin ningún límite determinable, si estamos dispuestos a dedicar el trabajo necesario para obtenerlos.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/davidricardoo.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/davidricardo1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1_ux19t8TOGFeKR8Tjfpm8N-IayyoMK9S?usp=sharing'
     }
    ]
  },
  {
    title: "Frédéric Bastiat",
    data: [
      {key: '6', 
      country: 'Francia', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderafrancia.png')} />,
      date: '1801-1850',
      bio: 'Frédérc Bastiat fue un economista, político, magistrado y pensador liberal francés de la primera mitad del siglo XIX. Desarrolló un pensamiento liberal, caracterizado por la defensa del libre comercio y la oposición al socialismo y al colonialismo. Fue parte de la Escuela Liberal Francesa. Conocido también como El Cobden francés.',
      sentence: 'La gente ya está empezando a darse cuenta de que el Estado es demasiado costoso. Lo que aún no terminan de comprender es que el peso de este coste recae sobre ellos.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/fredericbastiatt.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/fredericbastiat1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/12LfT4Z4WCtQk_3n2Ab1cmED2RiSv6Ats?usp=sharing'
     }
    ]
  },
  {
    title: "Alexis de Tocqueville",
    data: [
      {key: '7', 
      country: 'Francia', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderafrancia.png')} />,
      date: '1805-1859',
      bio: 'Charles-Alexis Clérel de Tocqueville fue pensador y político liberal francés. Procedente de una familia noble, Tocqueville fue uno de los observadores más lúcidos del cambio producido por en su época por la revolución liberal. Estudió derecho y obtuvo una plaza de magistrado en Versalles en 1827. Su obra magna fue La Democracia en América.',
      sentence: 'El individualismo es un sentimiento maduro y tranquilo que nos diferencia de las masas.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/alexisdetocquevillee.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/alexisdetocqueville1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1hxsReIHbGm0liF53HIARjhcrTXbJsc-D?usp=sharing'
     }
    ]
  },
  {
    title: "John Stuart Mill",
    data: [
      {key: '8', 
      country: 'Reino Unido', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderareinounido.png')} />,
      date: '1805-1873',
      bio: 'John Stuart Mill fue un economista, filósofo y político nacido en Londres que defendió el Utilitarismo. Miembro del Partido Liberal, Mill fue un defensor de la libertad individual en oposición al control estatal y social ilimitado, como también defendió la investigación de la metodología científica y el sufragio femenino.',
      sentence: 'No existe una mejor prueba del progreso de una civilización que la del progreso de la cooperación.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/johnstuartmilll.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/johnstuartmill1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1B0BHniiXiAxcYUkKByZSWNyHzGSDqsV_?usp=sharing'
     }
    ]
  },
  {
    title: "Juan Bautista Alberdi",
    data: [
      {key: '9', 
      country: 'Argentina', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderaargentina.png')} />,
      date: '1810-1884',
      bio: 'Juan Bautista Alberdi, el inspirador de la Constitución Nacional Argentina y del período más próspero de la economía Argentina, fue uno de los más grandes pensadores argentinos, nació en Tucumán el 29 de agosto de 1810. Su principal obra fue Bases y Puntos de Partida para la Organización Política de la República Argentina',
      sentence: 'El que no cree en la Libertad como fuente de riqueza, ni merece ser libre, ni sabe ser rico.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/juanbautista.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/juanbautistaalberdi1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1MwMVSAlsneN-7NzA0Lm4g5rF9urm08NU?usp=sharing'
     }
    ]
  },
  {
    title: "Herbert Spencer",
    data: [
      {key: '10', 
      country: 'Reino Unido', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderareinounido.png')} />,
      date: '1820-1903',
      bio: 'Herbert Spencer vivió en el siglo XIX. Aunque de formación técnica trabajó todo tipo de disciplinas, tanto en las ciencias naturales como en las sociales. Partidario del Darwinismo Social y firme defensor del individuo y del liberalismo más radical. Durante su vida alcanzó una tremenda autoridad, sobre todo en el ámbito académico de habla inglesa.',
      sentence: 'Fórmate tú en vez de esperar a que te formen y modelen.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/herbertspencerr.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/herbertspencer1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/13HHUnicZMGQMeN3aJl-wWW28nK-Ltp3l?usp=sharing'
     }
    ]
  },
  {
    title: "Carl Menger",
    data: [
      {key: '11', 
      country: 'Polonia', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderapolonia.png')} />,
      date: '1840-1921',
      bio: 'Carl Menger fue un economista austríaco, considerado junto a W.S Jevons y Léon Walras como uno de los fundadores del marginalismo y de la teoría de la utilidad. También fundador de la Escuela Austríaca, donde sus principales seguidores Wieser y Böhm-Bawerk fueron sus discípulos. Su obra más notable es Principios de Economía. ',
      sentence: 'Todo proceso de cambio significa un surgir, un hacerse, un devenir y esto sólo es imaginable en el tiempo.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/carlmengerr.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/carlmenger1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1s47EsjN-lmdAazwLD8VogZKggV3mZMJ_?usp=sharing'
     }
    ]
  },
  {
    title: "John Dewey",
    data: [
      {key: '12', 
      country: 'Estados Unidos', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderaeeuu.png')} />,
      date: '1859-1952',
      bio: 'John Dewey fue el filósofo estadounidense más importantes de la primera mitad del siglo XX y, junto con Charles Sanders Peirce y William James, uno de los fundadores de la filosofía del pragmatismo. Durante la primera mitad del siglo XX fue la figura más representativa de la pedagogía progresista en Estados Unidos.',
      sentence: 'La educación no es preparación para la vida, la educación es la vida misma.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/johndeweyy.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/johndewey1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1i3TQ8R79okaQqr0tbDSXC64rIpXSd6mk?usp=sharing'
     }
    ]
  },
  {
    title: "Leonard T.H.",
    data: [
      {key: '13', 
      country: 'Reino Unido', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderareinounido.png')} />,
      date: '1864-1929',
      bio: 'Leonard Trelawny Hobhouse sociólogo y filósofo inglés que intentó reconciliar el liberalismo con el colectivismo en aras del progreso social. Al elaborar su concepción de la sociología, se basó en su conocimiento de varios otros campos: filosofía, psicología, biología, antropología e historia de la religión, la ética y el derecho.',
      sentence: 'El verdadero consentimiento es libre consentimiento, y la plena libertad de consentimiento implica igualdad por parte de ambas partes para negociar.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/leonardtrelawnyhobhousee.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/leonardtrelawnyhobhouse1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/17quDRBGxbkMsLcCFUCFkIbAuF6NLoGE8?usp=sharing'
     }
    ]
  },
  {
    title: "Benedetto Croce",
    data: [
      {key: '14', 
      country: 'Italia', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderaitalia.png')} />,
      date: '1866-1952',
      bio: 'Benedetto Croce fue un escritor, filósofo, historiador y político italiano. Figura destacada del liberalismo. Fue miembro del senado italiano desde  1910, Ministro de Educación desde 1920 a 1921, y otra vez después de la II Guerra Mundial. Oponente al fascismo, se pronunció en contra del Gobierno de Benito Mussolini.',
      sentence: 'Hay quien pone en duda el porvenir del ideal de la libertad. Nosotros respondemos que tiene más que un porvenir: posee eternidad.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/benedettocrocee.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/benedettocroce1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1weqb9Mti0uGDoTXVQCXqGA9rYcZ-Zj9e?usp=sharing'
     }
    ]
  },
  {
    title: "Ludwig Von Mises",
    data: [
      {key: '15', 
      country: 'Ucrania', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderaucrania.png')} />,
      date: '1881-1973',
      bio: 'Ludwig Heinrich Edler Von Mises fue un economista austríaco. Mises ha contribuido en gran medida a la economía neoclásica y fue uno de los líderes de la Escuela Austríaca. Fue un firme defensor del liberalismo económico, basado en la idea de que la teoría de la oferta y la demanda dará lugar a la más eficiente asignación de los recursos.',
      sentence: 'Todo socialista es un dictador disfrazado.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/ludwigvonmisess.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/ludwigvonmises1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1kpyBdSd7E89fjM91tSBWs_n-fT8XUH9z?usp=sharing'
     }
    ]
  },
  {
    title: "Henry Hazlitt",
    data: [
      {key: '16', 
      country: 'Estados Unidos', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderaeeuu.png')} />,
      date: '1894-1993',
      bio: 'Henry Hazlitt fue un periodista, crítico libertario, economista y filósofo. Considerado uno de los intelectuales públicos más brillantes de nuestro siglo. En sus últimos años, a menudo se sorpendió de que La Economía en una Lección se hubiera conertido en su contribución más duradera. La escribió para exponer las falacias populares de su tiempo.',
      sentence: 'El Gobierno es incapaz de darnos algo sin despojarnos de algo más.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/henryhazlitt.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/henryhazlitt2.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1oTvyGwFDtYHLH-ia-iOyGRopimNXJOpr?usp=sharing'
     }
    ]
  },
  {
    title: "Friedrich Hayek",
    data: [
      {key: '17', 
      country: 'Austria', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderaaustria.png')} />,
      date: '1899-1992',
      bio: 'Friedrich Augustus Von Hayek fue un economista, jurista y filósofo vienés de la Escuela Austríaca. Especialmente conocido por recibir el Premio Nobel en 1974, Hayek fue un firme defensor de liberalismo y crítico de la economía planificada y el socialismo. La principal aportación de Von Hayek fue su teoría del ciclo económico.',
      sentence: 'El Socialismo inevitablemente erosiona la libertad y da lugar a la tiranía.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/friedrichhayekk.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/friedrichhayek1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1AKIoNLauNd0hIST_5e3TWG1-z4qBTHh5?usp=sharing'
     }
    ]
  },
  {
    title: "Karl Popper",
    data: [
      {key: '18', 
      country: 'Austria', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderaaustria.png')} />,
      date: '1902-1994',
      bio: 'Karl Popper es considerado como uno de los filósofos de la ciencia más importantes del siglo XX y sentó las una de las bases del método científico, el falsasionismo. En el discurso político, es conocido por su vigorosa defensa de la democracia liberal y los principios de la crítica social que creía que hacían posible una floreciente sociedad abierta.',
      sentence: 'La verdadera ignorancia no es la ausencia de conocimientos, sino el hecho de negarse a adquirirlos.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/karlpopperr.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/karlpopper1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1_xgDZS6N8-SkhqgxmqxQ0BRTYApNofDx?usp=sharing'
     }
    ]
  },
  {
    title: "Ayn Rand",
    data: [
      {key: '19', 
      country: 'Rusia', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderafrancia.png')} />,
      date: '1905-1982',
      bio: 'Ayn Rand fue una filósofa y escritora rusa de origen judío que obtuvo la nacionalidad estadounidense. Autora de las novelas El manantial y La Rebelión del Atlas, desarollo un sistema filosófico conocido como Objetivismo. Rand defendía el egoísmo racional, el individualismo y el capitalismo laissez faire, argumentando que es el único sistema económico que le permite al ser humano vivir como tal, es decir, haciendo uso de su facultad de razonar. En consecuencia, rechazaba absolutamente el socialismo, el altruismo y la religión.',
      sentence: 'La cuestión no es quién me lo va a permitir, sino quién me va a detener.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/aynrandd.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/aynrand1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1-qb6uo7Zg_jvql2mFmvXMNy-ZQkj0TuC?usp=sharing'
     }
    ]
  },
  {
    title: "Raymond Aron",
    data: [
      {key: '20', 
      country: 'Francia', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderafrancia.png')} />,
      date: '1905-1983',
      bio: 'Raymon Aron sociólogo francés. Fue uno de los primeros en proponer una teoría de la sociedad industrial como vía para comprender los problemas fundamentales de la civilización occidental del siglo XX. Aron, afín al liberalismo tradicional, fustigó las ideologías de derechas e izquierdas y fue un lúcido analista de la realidad social y política de su tiempo.',
      sentence: 'O los hombres cambian o la catástrofe cambiará a los hombres.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/raymondaronn.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/raymondaron1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1sz-A0-VkU95eVT1iXvy9_Fe7Y6g-pVyq?usp=sharing'
     }
    ]
  },
  {
    title: "Isaiah Berlin",
    data: [
      {key: '21', 
      country: 'Letonia', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderaletonia.png')} />,
      date: '1907-1997',
      bio: 'Isaiah Berlin fue un politólogo e historiador de las ideas, británico de origen judío; está considerado como uno de los principales pensadores liberales del siglo XX. A pesar de escribir solo escasas obras que fueron publicadas, sus charlas y coloquios fueron alguna vez grabados y transcritos, y muchas de sus palabras convertidas en obras publicadas.',
      sentence: '“Me aburre leer a la gente que, por así decirlo, es aliada, a quienes piensan más o menos como yo.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/isaiahberlinn.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/isaiahberlin1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1O6DOFNRhnNl7DMravxbS17x31mHh2lQh?usp=sharing'
     }
    ]
  },
  {
    title: "Norberto Bobbio",
    data: [
      {key: '22', 
      country: 'Italia', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderaitalia.png')} />,
      date: '1909-2004',
      bio: 'Norberto Bobbio fue un ensayista, profesor y teórico del pensamiento político. Norberto Bobbio nació el 18 de octubre de 1909 en Turín, en el seno de una familia acomodada y relativamente progresista. Su padre, Luigi Bobbio, era uno de los cirujanos más prestigiosos de la ciudad. Se declaró abierta y conscientemente en  contra del fascismo.',
      sentence: 'Ser de izquierdas es optar por los pobres, indignarse ante la exclusión social, inconformarse con toda forma de injusticia y considerar una aberración la desigualdad.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/norbertobobbioo.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/norbertobobbio1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/10mcD64Cl6XQv3NcPwYuTukmfzx53oyAf?usp=sharing'
     }
    ]
  },
  {
    title: "Milton Friedman",
    data: [
      {key: '23', 
      country: 'Estados Unidos', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderaeeuu.png')} />,
      date: '1912-2006',
      bio: 'Milton Friedman fue un estadístico, economista e intelectual estadounidense de origen judío ganador del Premio Nobel de Economía de 1976. Profesor en la Universidad de Chicago, fue uno de los fundadores de la Escuela de Economía de Chicago, una escuela de economía clásica defensora del libre mercado. Fue uno de los economistas más influyentes del siglo XX.',
      sentence: 'Una sociedad que priorice la igualdad por sobre la libertad no obtendrá ninguna de las dos.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/miltonfriedmann.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/miltonfriedman1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1ULRd9ET7kH3PjXN71KfXrtFNNsxPXasX?usp=sharing'
     }
    ]
  },
  {
    title: "James M. Buchanan",
    data: [
      {key: '24', 
      country: 'Estados Unidos', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderaeeuu.png')} />,
      date: '1919-2013',
      bio: 'James McGill Buchanan. Fue un economista norteamericano, se dedicó al estudio de la economía pública y especialmente de las elecciones públicas en su incidencia en los mercados. Obtuvo el Premio Nobel de Economía en 1986 por su desarrollo de las bases contracuales y constitucionales de la teoría de la adopción de decisiones económicas y políticas.',
      sentence: 'La economía es el estudio de todo el sistema de relaciones de intercambio. La política es el estudio de todo el sistema de relaciones coercitivas o potencialmente coercitivas.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/jamesmbuchanann.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/jamesmbuchanan1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1qNmTcLpSLPzv_uRGC9Xu0Q4yWSRT6WNO?usp=sharing'
     }
    ]
  },
  {
    title: "John Rawls",
    data: [
      {key: '25', 
      country: 'Estados Unidos', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderaeeuu.png')} />,
      date: '1921-2002',
      bio: 'John Rawls, filósofo estadounidense, profesor de filosofía política en la Universidad de Hardvard. Su vida encarnada el respeto a la Humanidad, principio que impartía a través de su pensamiento original y sorpendente combinación de libertad e igualdad, animado por la tolerancia y la democrática confianza en las posibilidades humanas.',
      sentence: 'En la justicia como equidad los hombres aceptan compartir su suerte. Las instituciones se crean para aprovechar los accidentes de la naturaleza y la circunstancia social sólo cuando sea en beneficio de todos.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/johnrawlss.jpg')} />,
      specialImage: <Image tyle={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/johnrawls1.jpg')} />,
      linklibros: 'https://drive.google.com/file/d/1D4cvjJ4RiTO93LZY3m5HbqfdW38Pz4lv/view?usp=sharing'
     }
    ]
  },
  {
    title: "Murray Rothbard",
    data: [
      {key: '26', 
      country: 'Estados Unidos', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderaeeuu.png')} />,
      date: '1926-1995',
      bio: 'Murray Rothbard, el gran discípulo de Mises, dio un nuevo empuje a la Escuela Austríaca con su tratado Hombre, Economía y Estado. Escribió ampliamente sobre teoría monetaria defendiendo el patrón oro y criticando los bancos centrales. Contribuyó a definir el moderno liberalismo de corte libertario.',
      sentence: 'En el mercado libre cada cual gana según su valor productivo en satisfacer los deseos de los consumidores, bajo distribución estatista, cada uno gana en proporción a la cantidad que puede saquear de los productores.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/murrayrothbard22.png')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/murrayrothbard1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1te1KhyP-Dluxr2C0FmUEtl0V2C0cOoIZ?usp=sharing'
     }
    ]
  },
  {
    title: "Ronald Dworkin",
    data: [
      {key: '27', 
      country: 'Estados Unidos', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderaeeuu.png')} />,
      date: '1931-2013',
      bio: 'Ronald Dworkin fue un filósofo del Derecho y catedrático de Derecho Constitucional. Su teoría del derecho es una de las contemporáneas más influyentes respecto de la naturaleza del derehco. Según The Journal of Legal Studies, fue el segundo autor estadounidense del siglo XX más citado en el campo del Derecho.',
      sentence: 'Dicrepamos, ferozmente sobre casi todo. Discrepamos sobre el terror y la seguridad, sobre la justicia social, sobre la religión en la política, sobre quién es apto para ser juez y sobre qué es la democracia. Estos desacuerdos no transcurren de manera civilizada, ya que no existe respeto recíproco entre las partes.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/ronalddworkinn.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/ronalddworkin1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1EvqfqsbnaFuwm4RQTP9SGh9YOZMi2aXl?usp=sharing'
     }
    ]
  },
  {
    title: "Javier Milei",
    data: [
      {key: '28', 
      country: 'Argentina', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderaargentina.png')} />,
      date: '1970-Presente',
      bio: 'Javier Gerardo Milei es un economista, escritor, docente, conductor de radio y conferencista argentino de filosofía anarcocapitalista pero liberal libertario en lo práctico, asociado a la Escuela Austríaca de pensamiento económico. Se hizo principalmente famoso por sus argumentos económicos en programas de televisión y su fuerte compromiso con la Batalla Cultural.',
      sentence: 'Hay dos modelos e sociedad: el Capitalismo que premia el esfuerzo, las ganas de progresar o el Socialismo, donde un conjunto de envidiosos quieren expropiarle el fruto de su trabajo al que le va bien.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/javiermilei.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/javiermileii.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1MQbmVRtuXqur7TWqBjHUAfzQl8V3V_ys?usp=sharing'
     }
    ]
  },
  {
    title: "Axel Kaiser",
    data: [
      {key: '29', 
      country: 'Chile', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderachile.png')} />,
      date: '1981-Presente',
      bio: 'Axel Kaiser es un profesor universitario, analista político y escritor chileno. Director Ejecutivo de la Fundación para el Progreso y columnista habitual de los periódicos El Mercurio, El Líbero y el Diario Financiero. Es fiel seguidor y divulgador del Liberalismo en Latinoamérica.',
      sentence: 'Nada más atractivo que prometer mejorar a los muchos atacando a los pocos.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/axelkaiser1.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/axelkaiserr.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1SY-NmMx6Jn-qC59f-7lt5k-M3PjtIzV5?usp=sharing'
     }
    ]
  },
  {
    title: "Gloria Álvarez",
    data: [
      {key: '30', 
      country: 'Guatemala', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderaguatemala.png')} />,
      date: '1985-Presente',
      bio: 'Gloria Álvarez Cross es una politóloga, presentadora de televisión, locutora de radio y escritora guatemalteca que se identifica como libertaria. Descrita como una figura mediática, ha realizado giras de conferencias por Iberoamérica en contra del populismo. Una de las figuras más actuales que representa el Liberalismo en la lucha de las ideas.',
      sentence: 'El derecho de cada individuo a creer en sirenas, elfos, duendes, unicornios o dioses, es algo a lo que jamás un libertario se opone. A lo que los libertarios nos oponemos es a que esas creencias sean estatizadas y dirijan la prohibición de libertades individuales por ley.',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/gloriaalvares.jpg')} />,
      specialImage: <Image style={styles.specialImage} source={require('../assets/fotosPersonajes/MarcoEspecial/gloriaalvares1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/1yUMeR-NdwwwUPQuiOxrGriR4HewRGAP5?usp=sharing'
     }
    ]
  }
];








const CharactersScreen = ({ navigation }) => {

  

    
    
    return(
    
    <SafeAreaView style={styles.container}>
        <SectionList
        sections={DATA}
        renderItem={({ item, section }) => 
        <View style={styles.mainContainer}>
            <View style={styles.pictureContainer}>
            {item.normalImage}
            </View>
            <View style={styles.textContaner}>
            <Text style={styles.nameTitle}>{section.title}</Text>
            <Text style={styles.textPicture}>{item.country}  {item.countryFlag}</Text>
            <Text style={styles.textDate}>{item.date}</Text>
            <View style={styles.buttonsContainer}>
                
                <TouchableHighlight 
                    style={styles.highlightButton}
                    activeOpacity={0.6}
                    underlayColor={'#ccc'}
                    onPress={() => {navigation.navigate('Info', {image: item.specialImage, frase: item.sentence, nombre: section.title, bio: item.bio, link: item.linklibros})}}>

                        <Text style={styles.buttonText}>DETALLES</Text>
                </TouchableHighlight>

                

            </View>
            </View>
        </View> 
        
        }
        renderSectionHeader={({}) => {}}
        />
        
    </SafeAreaView>
    )
};



export default CharactersScreen;
