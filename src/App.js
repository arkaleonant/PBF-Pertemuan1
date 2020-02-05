import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavbarBrand } from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#link">Features</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

        <img src={logo} className="App-logo" alt="logo" />

        <Table >
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Arka</td>
            <td>Leonanta</td>
            <td>@arkaleonant</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Angga</td>
            <td>Saputra</td>
            <td>@asaputra</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Dio</td>
            <td>Vanny</td>
            <td>@RyuuKiyoshi</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
