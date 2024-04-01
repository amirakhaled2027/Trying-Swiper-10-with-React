// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

//import images
import Office from './assets/office.jpg';
import Meeting from './assets/meeting.jpg';
import Empty from './assets/empty.jpg'

//import css
import Styles from './SwiperTest10.css'





function SwiperTest10() {
  return (
    <div>
       <div>
       <swiper-container>
  <swiper-slide lazy="true">
    <img src={Office} loading="lazy" />
  </swiper-slide>
  <swiper-slide lazy="true">
    <img src={Meeting} loading="lazy" />
  </swiper-slide>
  <swiper-slide lazy="true">
    <img src={Empty} loading="lazy" />
  </swiper-slide>
  ...
</swiper-container>
       </div>

       <br />
       <br />
       <br />
       <div>
       <swiper-container>
  <div slot="container-start">Rendered before wrapper</div>
  <div slot="container-end">Rendered after wrapper</div>
  <swiper-slide><img src={Office}/></swiper-slide>
  <swiper-slide><img src={Meeting}/></swiper-slide>
  <swiper-slide><img src={Empty}/></swiper-slide>
  ...
</swiper-container>
       </div>
    </div>



  )
}

export default SwiperTest10
