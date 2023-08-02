import Container from "react-bootstrap/Container";
import { doctorData } from "../helper/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddModal from "./AddModal";
import { useState } from "react";

const Doctors = ({ apps, setApps }) => {
  const [show, setShow] = useState(false);
  const [drName, setDrName] = useState(""); //! bu state img ye tiklandiginda doktor isminin gelmesi icin

  // const handleImgClick = () => {
  // ! img ye tiklandiginda veri girme kutucugu acilacak. burada handleShow() u cagririz.
  //   setShow(true);
  // };

  return (
    // ! react bootstrap ten Container Class i da verirsek daha iyi tasarim yapmis oluruz.
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Respected Doctors
      </h3>
      {/* //! coklu veri oldugu icin burada map() ile donmemiz lazim. ve burada bir grid yapisi kullanilacak. yani responsive bir tasarim var. Row-Col yapisi olacak. kolay metod olarak react boot strapten Row u import edecegim. self closing degil SARMALLAYICI OLARAK !!! yazacagim. row u ustte import ettikten sonra Col u da import edecegiz.  */}
      <Row className="justify-content-center">
        {/* //! eger map() de suslu kullansa idik return kullancaktik. ama normal parantez kullandik. return e gerek yok. burdaki n tane Col u asagidaki map() dongusu olusturuyor.   */}

        {/* //! {doctorData.map(({item}) =>  yazdigimiz zaman alt tarafta item.name, item.id, item.img... yazilabilir */}

        {doctorData.map(({ id, img, name, dep }) => (
          <Col xs={6} sm={4} md={3} key={id}>
            {/*//! Burada Warning gorulebilir: EACH CHILD IN A LIST SHOULD HAVE A UNIQUE "KEY" PROP. buda surekli resme basiyoruz. unique key prop lazim Col icerisnde  */}
            {/* //! img ye tiklanildiginda veri yazma butonu acilmasi icin onClick eventini yazariz. */}
            <img
              src={img}
              alt=""
              className="img-thumbnail doctor-img"
              onClick={() => {
                setDrName(name); //! doktor ismi guncellenmis olur setDrName i cagirarak
                setShow(true);
              }}
            />
            <h5>{name}</h5>
            <h6>{dep}</h6>
          </Col>
        ))}
      </Row>
      {/* //! Add modal eklentisi. Add modal da tiklanma olayinin calismasi icin buray aiki prop lazim */}
      <AddModal
        show={show}
        handleClose={() => setShow(false)}
        apps={apps}
        setApps={setApps}
        drName={drName}
      />
    </Container>
  );
};

export default Doctors;
