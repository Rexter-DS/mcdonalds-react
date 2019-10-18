import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Image, Grid, Icon, Dropdown, Button, List } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    const firstRow = { marginBottom: "-50px" };
    const greyText = { color: "grey" };
    return (
        <Menu borderless>
          <Container>
            <Menu.Item>
              <Image src="https://www.mcdonalds.com/content/dam/usa/nfl/assets/nav/arches-logo_108x108.jpg"/>
            </Menu.Item>
            <Grid item columns="two">
              <Grid.Row style={firstRow}>
                <Dropdown item text="Language" style={greyText}>
                  <Dropdown.Menu>
                    <Dropdown.Item>English</Dropdown.Item>
                    <Dropdown.Item>Espanol</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item style={greyText}>Sign Up for Email</Menu.Item>
                <Menu.Item style={greyText}>Careers</Menu.Item>
                <Menu.Item style={greyText} position="right">
                  <Icon name="search"/> Search
                </Menu.Item>
                <Menu.Item style={greyText}>
                  <Icon name="map marker alternate"/> Change Your Location
                </Menu.Item>
              </Grid.Row>
              <Grid.Row>
                <Dropdown item text="Our Menu">
                  <Dropdown.Menu>
                    <Dropdown.Item>All Day Breakfast</Dropdown.Item>
                    <Dropdown.Item>Beverages</Dropdown.Item>
                    <Dropdown.Item>Burgers</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item>McCafe</Menu.Item>
                <Menu.Item>About Our Food</Menu.Item>
                <Menu.Item>Deals & Our App</Menu.Item>
                <Menu.Item>Trending Now</Menu.Item>
                <Menu.Item>Locate</Menu.Item>
              </Grid.Row>
            </Grid>
          </Container>
        </Menu>
    );
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <div className="grad-background">
          <Container className="overlaytext">
            <Header as='h1'>Wake Up Breakfast
            <Header.Subheader>A freshly prepared breakfast <br/> Mobile Order & Pay.*</Header.Subheader>
            </Header>
            <Button className="orderbutton">Order Breakfast Now</Button>
          </Container>
        </div>
    );
  }
}

class BottomMenu extends React.Component {
  render() {
    const secondRow = { paddingTop: "15px", color: "grey"};
    return (
        <Container className="footer">
          <Grid columns="five" >
            <Grid.Column>
              <Grid.Row>
                About Us
              </Grid.Row>
              <Grid.Row style={secondRow}>
                <List>
                  <List.Item>Our History</List.Item>
                  <List.Item>Leadership Team</List.Item>
                  <List.Item>Values In Action</List.Item>
                  <List.Item>Investor Relations</List.Item>
                  <List.Item>News & Notifications</List.Item>
                  <List.Item>Franchise Info</List.Item>
                  <List.Item>Real Estate</List.Item>
                  <List.Item>Recalls & Alerts</List.Item>
                  <List.Item>Digital Accessibility</List.Item>
                </List>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column>
              <Grid.Row>
                Careers
              </Grid.Row>
              <Grid.Row style={secondRow}>
                <List>
                  <List.Item>Education Opportunities</List.Item>
                  <List.Item>Employee Perks</List.Item>
                  <List.Item>Meet Our People: Staff & Management</List.Item>
                  <List.Item>Working with Us</List.Item>
                  <List.Item>Apply Now</List.Item>
                </List>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column>
              <Grid.Row>
                Services
              </Grid.Row>
              <Grid.Row style={secondRow}>
                <List>
                  <List.Item>Wi-Fi</List.Item>
                  <List.Item>Arch Card® PlayPlaces & Parties</List.Item>
                  <List.Item>McDelivery®</List.Item>
                  <List.Item>Mobile Order & Pay</List.Item>
                </List>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column>
              <Grid.Row>
                Community
              </Grid.Row>
              <Grid.Row style={secondRow}>
                <List>
                  <List.Item>HACER® Scholarships for Hispanic Students</List.Item>
                  <List.Item>Ronald McDonalds House Charities</List.Item>
                  <List.Item>McDonald's International</List.Item>
                  <List.Item>Black & Positively Golden</List.Item>
                </List>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column>
              <Grid.Row>
                Contact Us
              </Grid.Row>
              <Grid.Row style={secondRow}>
                <List>
                  <List.Item>Arch Card</List.Item>
                  <List.Item>Donations</List.Item>
                  <List.Item>Employment</List.Item>
                  <List.Item>Mobile App</List.Item>
                  <List.Item>Restaurant Feedback</List.Item>
                </List>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="footer">
          <Container>
            <Menu.Item>
              <Icon name="circular facebook f"/>
            </Menu.Item>
            <Menu.Item>
              <Icon name="circular twitter"/>
            </Menu.Item>
            <Menu.Item>
              <Icon name="circular youtube icon"/>
            </Menu.Item>
            <Menu.Item>
              <Icon name="circular instagram"/>
            </Menu.Item>
            <Menu.Item>
              <Icon name="circular tumblr"/>
            </Menu.Item>
            <Menu.Item>
              <Icon name="circular spotify"/>
            </Menu.Item>
            <Menu.Item position="right">
              <Image src="https://www.mcdonalds.com/content/dam/usa/nfl/logo/app_store_badge.png"/>
              <Image src="https://www.mcdonalds.com/content/dam/usa/nfl/logo/google_play_badge.png"/>
            </Menu.Item>
          </Container>
        </Menu>
    );
  }
}

class Mcdonalds extends React.Component {
  render() {
    return (
      <div>
        <TopMenu/>
        <MiddleMenu/>
        <BottomMenu/>
        <FooterMenu/>
      </div>
    );
  }
}

ReactDOM.render(<Mcdonalds/>, document.getElementById('root'));
