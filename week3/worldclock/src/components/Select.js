import React from 'react'
import { Form } from 'react-bootstrap';
const Select = ({setZone,region}) =>{
  return (
    <div>
      <Form.Select aria-label="Default select example" onChange={(e) => setZone(e.target.value)} >
  <option value={region.zurich}>Zurich</option>
  <option value={region.us}>Los Angeles</option>
  <option value={region.seoul}>Seoul</option>
</Form.Select>
    </div>
  )
}
export default Select
