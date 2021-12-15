import React from 'react'

class Clients extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <hr />
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col"> Name </th>
                <th scope="col"> Email </th>
                <th scope="col"> City </th>
                <th scope="col"> Company </th>
                <th scope="col" className="text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
      </>
    )
  }
}
export default Clients