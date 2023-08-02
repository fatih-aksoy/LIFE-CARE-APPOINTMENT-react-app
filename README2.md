# Appointment app notes

###### SEMANTIC COMMIT NEDIR?!!!!

###### hotfix:hata duzeltme, feature: ozellik ekleme, bug: bug duzeltme,, style: img style added etc....

###### Resimler neden public klasoru icerisinde img icersinde. cunku import etmeden direk path vererek resimlere ulasiyoruz. localde reimleriniz varsa bir uygulama ile resimlere basmak istiyorsaniz, public uzerinden direk resimlere ulasabilirsiniz.

###### Doctors ve AppointmenyList, bu ikisi child componenttir. ikisi arasinda propgecisi olmaz cunku ayni seviyedeler. cekilen data, appointment list ve doctors componentinde de lazim. burda Lifting Starte up kavramini uygulariz. yani bu ikisinin birlestigi bir ust component Home.jsx de datayi ceker ve asagi dagitiriz.

###### bu projecde react bootstrap library kullanildi. layout dan breakpoints xm sm md ozellileri ve layout modal ozelliklerinden faydalanildi.

´const Doctors = () => {
console.log(doctorData);
return (

<!-- react bootstrap ten Container Class i da verirsek daha iyi tasarim yapmis oluruz.  -->
<Container className="p-2">
<h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
Our Respected Doctors
</h3>
<!--  coklu veri oldugu icin burada map() ile donmemiz lazim. ve burada bir grid yapisi kullanilacak. yani responsive bir tasarim var. Row-Col yapisi olacak. kolay metod olarak react boot strapten Row u import edecegim. self closing degil SARMALLAYICI OLARAK !!! yazacagim. row u ustte import ettikten sonra Col u da import edecegiz. -->
<Row>
<!-- {/_ //! eger map() de suslu kullansa idik return kullancaktik. ama normal parantez kullandik. return e gerek yok. burdaki n tane Col u asagidaki map() dongusu olusturuyor. _/}

         <!-- doctorData.map(({item}) =>  yazdigimiz zaman alt tarafta item.name, item.id, item.img... yazilabilir  -->

        {doctorData.map(({id,img,name,dep}) => (
          <Col xs={6} sm={4} md={3} >
            <img src={img} alt=""className="img-thumbnail doctor-img" />
            <h5>{name}</h5>
            <h6>{dep}</h6>
          </Col>
        ))}
      </Row>
    </Container>´

###### 2. yol

´
import Container from "react-bootstrap/Container";
import { doctorData } from "../helper/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddModal from "./AddModal";
import { useState } from "react";

const Doctors = () => {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const handleImgClick = () => {
// ! img ye tiklandiginda veri girme kutucugu acilacak. burada handleShow() u cagririz.
handleShow();
};

return (
// ! react bootstrap ten Container Class i da verirsek daha iyi tasarim yapmis oluruz.
<Container className="p-2">

<h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
Our Respected Doctors
</h3>
{/_ //! coklu veri oldugu icin burada map() ile donmemiz lazim. ve burada bir grid yapisi kullanilacak. yani responsive bir tasarim var. Row-Col yapisi olacak. kolay metod olarak react boot strapten Row u import edecegim. self closing degil SARMALLAYICI OLARAK !!! yazacagim. row u ustte import ettikten sonra Col u da import edecegiz. _/}
<Row>
{/_ //! eger map() de suslu kullansa idik return kullancaktik. ama normal parantez kullandik. return e gerek yok. burdaki n tane Col u asagidaki map() dongusu olusturuyor. _/}

        {/* //! {doctorData.map(({item}) =>  yazdigimiz zaman alt tarafta item.name, item.id, item.img... yazilabilir */}

        {doctorData.map(({ id, img, name, dep }) => (
          <Col xs={6} sm={4} md={3}>
            {/* //! img ye tiklanildiginda veri yazma butonu acilmasi icin onClick eventini yazariz. */}
            <img
              src={img}
              alt=""
              className="img-thumbnail doctor-img"
              onClick={handleImgClick}
            />
            <h5>{name}</h5>
            <h6>{dep}</h6>
          </Col>
        ))}
      </Row>
      {/* //! Add modal eklentisi */}
      <AddModal show={show} handleClose={handleClose} />
    </Container>

);
};

export default Doctors;

´
