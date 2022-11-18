import Script from 'next/script'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'
import useOnclickOutside from 'react-cool-onclickoutside'

import style from './PlacesAutocompleteGoogle.module.css'

export default function PlacesAutocompleteGoogle({
  zone,
  setZone,
  setAddressNotAccepted,
}) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: ['ES'] },
      strictBounds: true,
      types: ['address'],
    },
    debounce: 300,
  })
  const registerRef = useOnclickOutside(() => {
    clearSuggestions()
  })

  const origin = { lat: 36.721465873443314, lng: -4.438959173978912 }

  const handleInput = (e) => {
    setValue(e.target.value)
    setAddressNotAccepted(true)
  }

  const handleSelect =
    ({ description }) =>
    async () => {
      setValue(description, false)
      clearSuggestions()

      // Get latitude and longitude via utility functions
      const result = await getGeocode({ address: description })
      const destinationCoords = getLatLng(result[0])

      if (typeof window !== 'undefined') {
        const services = new google.maps.DistanceMatrixService()

        const request = {
          origins: [origin],
          destinations: [destinationCoords],
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false,
        }

        const response = await services.getDistanceMatrix(request)

        response.rows[0].elements.forEach((element) => {
          const distanceString = element.distance.text.split(' ', 1)[0]
          const distNumber = distanceString.replace(',', '.')

          if (distNumber > 10) {
            setAddressNotAccepted(true)
            const res = {
              ok: false,
              distNumber,
              address: description,
              postalCode: '',
            }
            setZone(res)
          } else {
            setAddressNotAccepted(false)
            const res = {
              ok: true,
              distNumber,
              address: description,
              distance: element.distance.text.split(' ', 1)[0],
              duration: element.duration.text.split(' ', 1)[0],
            }
            setZone(res)
          }
        })
      }
    }

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      )
    })

  return (
    <div ref={registerRef} className={style.placesBox}>
      <label htmlFor='address'>Calle/Avenida/Zona</label>
      <input
        id='address'
        type='text'
        className={style.places}
        autoComplete='off'
        name='zona'
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder={zone || 'Marca del autocompletado'}
      />
      {/* ********** */}
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === 'OK' && <ul className={style.list}>{renderSuggestions()}</ul>}
    </div>
  )
}
