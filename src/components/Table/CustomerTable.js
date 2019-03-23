import React from 'react';
import { Table } from 'reactstrap';

const CustomerTable = ({ customers }) => {
  const status = {
    shipped: 'green',
    error: 'red',
    packing: 'blue'
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="resent-orders">
          <p className="resent-orders-text">
            Resent orders <span className="resent-orders-arrow">&#9660;</span>
          </p>
        </div>
        <Table>
          <thead>
            <tr className="customer-header">
              <th />
              <th>Patient Name</th>
              <th>Order Date</th>
              <th>Metadata</th>
              <th>Medication</th>
              <th />
            </tr>
          </thead>
          <tbody className="align-middle">
            {customers.map(customer => {
              return (
                <tr key={customer.id}>
                  <td className="text-center">
                    <span
                      className={`align-middle dot ${
                        status[customer.orderStatus]
                      }`}>
                      &#9679;
                    </span>
                    {/* {console.log(customer.orderStatus)} */}
                    <span className="d-none">{customer.orderStatus}</span>
                  </td>
                  <td className="align-middle patient-name">
                    {customer.patientName}
                  </td>
                  <td className="align-middle order-date">
                    {customer.orderDate}
                  </td>
                  <td className="align-middle meta-data">
                    {customer.metaData}
                  </td>
                  <td className="align-middle medication">
                    {customer.medication}
                  </td>
                  <td className="align-middle text-center">
                    <button type="button" className="btn btn-details">
                      details
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <button
        type="button"
        className="btn btn-showmore d-block mx-auto text-nowrap">
        show more
      </button>
    </React.Fragment>
  );
};

export default CustomerTable;
