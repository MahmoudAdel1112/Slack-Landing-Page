import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown, Col, Row } from 'react-bootstrap';
import './App.css'

export default function App() {
  return (
    <Container>
      <Navbar expand='lg'>
        <Navbar.Brand>
          <img src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black.png" alt="what" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id='navbar-nav'>
          <Nav>
            <NavDropdown title='Features' className='d-flex flex-row'>
              <div className='grid-cont'>
                <Row className='gap-0'>
                  <Col lg={4} sm={12}>
                    <div className='navbar-navdropdown'>
                      <p className='first-child bg-white'>COLLABORATION</p>
                      <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                        <span className='primary-text'>Channels</span>
                        <span className='secondary-text'>Organize teams and work</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                        <span className='primary-text'>Slack Connect</span>
                        <span className='secondary-text'>Work with external partners</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                        <span className='primary-text'>Messaging</span>
                        <span className='secondary-text'>Chat with your team</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                        <span className='primary-text'>Huddles</span>
                        <span className='secondary-text'>Meet with audio and video</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                        <span className='primary-text'>Clips</span>
                        <span className='secondary-text'>Record and share updates</span>
                      </NavDropdown.Item>
                    </div>
                  </Col>

                  <Col lg={4} sm={12} className='px-0'>
                    <div className='navbar-navdropdown'>
                      <p className='first-child bg-white'>PROJECT MANAGEMENT</p>
                      <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                        <span className='primary-text'>Templates</span>
                        <span className='secondary-text'>Start any task, fast</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                        <span className='primary-text'>Canvas</span>
                        <span className='secondary-text'>Create rich, flexible docs</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                        <span className='primary-text'>Lists</span>
                        <span className='secondary-text'>Organize, track and manage projects</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                        <span className='primary-text'>Search</span>
                        <span className='secondary-text'>Seek shared knowledge</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                        <span className='primary-text'>File Sharing</span>
                        <span className='secondary-text'>Bring files to the flow of work</span>
                      </NavDropdown.Item>
                    </div>
                    <div className='navbar-navdropdown mt-2'>
                      <p className='first-child bg-white'>INTEGRATIONS</p>
                      <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                        <span className='primary-text'>Workflow Builder</span>
                        <span className='secondary-text'>Automate everyday tasks</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                        <span className='primary-text'>Apps & Integrations</span>
                        <span className='secondary-text'>Connect your tools with Slack</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                        <span className='primary-text'>Slack and Salesforce</span>
                        <span className='secondary-text'>Bring CRM insights into Slack</span>
                      </NavDropdown.Item>
                    </div>
                  </Col>

                  <Col lg={4} sm={12}>
                    <div className='navbar-navdropdown'>
                      <p className='first-child bg-white'>INTELLIGENCE</p>
                      <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                        <span className='primary-text'>Slack AI</span>
                        <span className='secondary-text'>Save time and work smarter with powerfully simple AI</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                        <span className='primary-text'>Agentforce</span>
                        <span className='secondary-text'>Empower your whole team with AI-powered agents in Slack</span>
                      </NavDropdown.Item>
                    </div>
                    <div className='navbar-navdropdown mt-2'>
                      <p className='first-child bg-white'>ENTERPRISE PLATFORM</p>
                      <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                        <span className='primary-text'>Security</span>
                        <span className='secondary-text'>Protect data, ensure compliance</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                        <span className='primary-text'>Enterprise Key Management</span>
                        <span className='secondary-text'>Monitor and revoke access</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                        <span className='primary-text'>Slack Atlas</span>
                        <span className='secondary-text'>Discover rich profiles and org charts</span>
                      </NavDropdown.Item>
                    </div>
                  </Col>
                </Row>
              </div>
            </NavDropdown>
            <NavDropdown title='Solutions'>

                <div className='grid-cont2'>
                  <Row className='gap-3'>
                    <Col md={6}>
                      <div className='navbar-navdropdown'>
                        <p className='first-child bg-white'>By Department</p>
                        <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                          <span className='primary-text'>Engineering</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                          <span className='primary-text'>IT</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                          <span className='primary-text'>Sales</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                          <span className='primary-text'>Project Management</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                          <span className='primary-text'>Marketing</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                          <span className='primary-text'>Human Resources</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                          <span className='primary-text'>Security</span>
                        </NavDropdown.Item>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className='navbar-navdropdown'>
                        <p className='first-child bg-white'>BY INDUSTRY</p>
                        <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                          <span className='primary-text'>Manufacture, Auto & Energy</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                          <span className='primary-text'>Technology</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                          <span className='primary-text'>Media</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                          <span className='primary-text'>Small Business</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                          <span className='primary-text'>Financial Services</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                          <span className='primary-text'>Retail</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item className='d-flex flex-column text-hover bg-white'>
                          <span className='primary-text'>Health & Life Sciences</span>
                        </NavDropdown.Item>
                      </div>
                    </Col>
                  </Row>
                </div>
            </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container >
  );
}