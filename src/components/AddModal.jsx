import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

// !  doktor resimlerinin uzerine tiklandiginda bir modal gelmeli. bunu da react bootstrap layout modal dan faydalanarak yapariz.

// ! state le gidince hata yapar ama burdada lazim o yuzden proya prop gondericez. function AddModal({show,handleClose}) olarak yazariz. Ama Doctor Componenti icinden AddModal a yani buraya <AddModal show={show} handleClose={handleClose}/> olaarak problari yazar ve gondeririz.
function AddModal({ show, handleClose, apps, setApps, drName }) {
  // ! asagidaki stateler Doctors a tasinir LIFTING STATE UP kavramindan dolayi yoruma alindi.
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  // ! useStateler kullandik. cunku patien name ve date tutucaz.
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const handleSubmit = (e) => {
    e.preventDefault();
    // ! patient bilgileri JSON icerisinde oldugu icin setApps icerisine spread metodu uygulariz. setApps([]). apps dizisi icerisine {} obje gelecek. sonrasinda burada bir id olusuturacagiz.
    setApps([
      ...apps,
      {
        // ! dizi eger 5 ten baslar 6 ise asagidaki id yi ona gore ayarlamaliyiz.
        // id: apps.length + 1,
        id: new Date().getTime(),
        patient: name,
        day: date,
        consulted: false,
        doctor: drName,
      },
    ]);
    setName("")
    handleClose();
  };

  return (
    // !! asagidaki butona ihtiyac yok. o yuzden command a aldik. biz img ye tikayinca bilgi ekleme kismi gelecek. onu da Doctors componentinde yapariz.
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      {/* //! asagidaki show aslinda true yu ifade eder onhide ise close butonunda basildiginda false u temsil eder. */}

      {/* //! sonra bize bu butonlar bize doctors componentinde lazim olacak. burada LIFTING STATE UP durumunu uygulariz. bu yuzden ustteki stateler doctors a tasinacak. show={show} ====> true   onHide={handleClose}====>fslse */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient Name</Form.Label>
              {/* //! asagida form.control icerisnde onChange event i tanimlanacak. callback fonk. tanimlanim icerisine setName yazilacak ve girilen degere ulasmak icin e.target.value yazilacak.*/}
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
                // ! burada value vermek iyidir. baslangic degerine bir isim yazarsak yukaridaki useState icerisine, formda bu ismi goruruz. bunu value={name} initial deger vererek saglar.
                value={name}
                required
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Day&Time</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date"
                onChange={(e) => setDate(e.target.value)}
                // ! burada value vermek iyidir. ust tarafta useState icerisinde gunun tarihini gormek icin, asagiya value={date} yazmamiz gerekir baslangic degeri olarak.
                value={date}
                required
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="success" type="submit" className="me-2">
                Save
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
