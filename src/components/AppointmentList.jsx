import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { TiDelete } from "react-icons/ti";

const AppointmentList = ({ apps, setApps }) => {
  console.log(apps);

  const handleDelete = (id) => {
    // ! appointment i silicez. silme islemi icin en yontem id yi kullanmaktir. bir suru sey icerisinde birsey sileceksek id den yakalayip silmek iyidir. su anda appointmentlarin tutuldugu APPS DIZISI var elimizde. buradada setApps e ihtiyac var. yukardaki apps propunun yanina setApps yazariz. gunumuzde silmek icin uygulanan en kolay metod filter() metodudur. filter bize bir dizi dondurur.

    // !!! BURASI ONEMLI. yukaradaki parametre icinde id si su olani sil diyecegiz. id si ussten gelen id olmayanlari dondur dersem ne olur? id si USTTEN GELENLERLE AYNI OLMAYANLARI GERI DONDUR. O id li ELEMAN CIKAR. VE GERI KALAN id LER TEKRAR YAZILMIS OLUR. BURASI COK ONEMLI!!!!

    //!  item icerisindeki id esit degilse ussten gelen id ye.
    // ! setApps state ti guncelleyen fonksiyondur.
    setApps(apps.filter((item) => item.id !== id));
  };

  // ! uzerine doubleClick yapilinca consulted yazisi gelecek. bunun icin toggle kullanilir ve id sini bildirmek lazim.bu sefer map ile modifikasyonla yapicaz. map ile gezerken item.id si proptan gelen id ile ortusuyorsa diye condition kuracagiz. consulted bir obje icerisinde. objeyi acariz. id ile ortusuyorsa item i ...spread ile acariz. consulted in var olan degerinin tersini aliriz.   eger degilse item i aynen dondur. (TERNARY YAPISI)
  const handleDoubleClick = (id) => {
    setApps(
      apps.map((item) =>
        item.id == id ? { ...item, consulted: !item.consulted } : item
      )
    );
  };

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      {/* //! eger appoinment kisminda birsey yoksa asagidaki resmi bos kisma bas. && kullandik, yani true ise demek */}
      {apps.length < 1 && <img src="./img/appointment.jpg" width="70%" />}
      {/* //! {apps.map((item) olarak da baslanabilir. */}
      {apps.map(({ id, patient, doctor, consulted, day }) => (
        // ! id yi key e veririz . Div n kere basilacaktir.
        <div
          key={id}
          className={consulted ? "appointments consulted" : "appointments"}
          onDoubleClick={() => handleDoubleClick(id)}
        >
          {/* // ! data.jsx e baktigimizda consulted degerini bir true-false yani boolean degeri oldugu gorulecektir. boylelikle bir condition degeri uygulamaliyiz. true demek consulted damgasinin form uzerinde olmasi demektir. Ternary yapisi uygulanacak.
           */}

          <Row className="justify-content-between align-items-center">
            <Col xs={12} sm={12} md={6}>
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
            </Col>
            <Col>
              <h5>{day}</h5>
            </Col>
            <Col className="text-end">
              <TiDelete
                className="text-danger fs-1"
                onClick={() => handleDelete(id)}
                type="button"
              />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
