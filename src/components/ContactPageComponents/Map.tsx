import React from 'react'

const Map = () => {
  return (
    <div>
    <div className="mapouter">
      <div className="gmap_canvas">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127357.71188581262!2d39.596222583956944!3d-4.035014502468972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012e78ec02c7d%3A0xcb618bbc35d0db5a!2sMombasa!5e0!3m2!1sen!2ske!4v1668111231878!5m2!1sen!2ske"
        className="border-0 w-full h-[450px]"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
</div>
  </div>
  )
}

export default Map