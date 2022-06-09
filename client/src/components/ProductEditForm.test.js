import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import ProductEditForm from './ProductEditForm'
import userEvent from '@testing-library/user-event'

describe('<ProductEditForm />', () => {
  let container
  let product
  let onUpdateProduct
  let setShowForm

  beforeEach(() => {
    product = {
      id: 1,
      title: "Amazon Kindle E-reader",
      quantity: '5',
      price: '79.99',
    }

    onUpdateProduct = jest.fn()
    setShowForm = jest.fn()

    container = render(
      <ProductEditForm product={product} onUpdateProduct={onUpdateProduct} setShowForm={setShowForm}/>
    ).container
  })

  test('<ProductEditForm /> reflects current state of product object', async () => {
    const expectedObj = {title: 'Amazon Kindle E-reader', price: '79.99', quantity: '5'}

    const updateButton = screen.getByText('Update')
    userEvent.click(updateButton)

    expect(onUpdateProduct.mock.calls).toHaveLength(1)
    expect(onUpdateProduct.mock.calls[0][0]).toEqual(expectedObj)
  })

  test('<ProductEditForm /> updates parent state and calls handleFormSubmit', async () => {

    const nameInput = container.querySelector('#product-name')
    const priceInput = container.querySelector('#product-price')
    const quantityInput = container.querySelector('#product-quantity')

    const updateButton = screen.getByText('Update')

    const expectedObj = {title: 'test name', price: '1.50', quantity: '5'}

    userEvent.clear(nameInput)
    userEvent.type(nameInput, 'test name' )
    userEvent.clear(priceInput)
    userEvent.type(priceInput, '1.50' )
    userEvent.clear(quantityInput)
    userEvent.type(quantityInput, '5' )
    userEvent.click(updateButton)

    expect(onUpdateProduct.mock.calls).toHaveLength(1)
    expect(onUpdateProduct.mock.calls[0][0]).toEqual(expectedObj)
  })

  test('<ProductEditForm /> closes when cancel button clicked', async () => {

    const cancelButton = screen.getByText('Cancel')
    userEvent.click(cancelButton)  
    
    expect(setShowForm.mock.calls[0][0]).toEqual(false)
  })

})