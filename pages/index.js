import { Text, Navbar, Link,  Container, Row, Card, Col, Image, Spacer } from '@nextui-org/react';
import { AudioPlayer } from "decent-audio-player";



export default function Home() {
  return (
    <>
      {/* Decent Player component with background */}
      <Container justify="center" sm="true" >
      {/* Navbar with socials or other info */}
      <Navbar isBordered variant="floating">
            {/* Artist Branding */}
            <Navbar.Brand>
              <Image src="/decent.png" width={60} height={60} alt="logo"/>
            </Navbar.Brand>
            {/* Socials/Dropdown Menu */}
            <Navbar.Collapse>
              <Navbar.CollapseItem>
                <Link
                  color="primary"
                  css={{
                    minWidth: "66%",
                    fontFamily: "Genos",
                    fontSize: "$3xl"
                  }}
                  href={"https://twitter.com/TainoMusica"}
                >
                  Twitter
                </Link>
              </Navbar.CollapseItem>
              <Navbar.CollapseItem>
              <Link
                  color="primary"
                  css={{
                    minWidth: "66%",
                    fontFamily: "Genos",
                    fontSize: "$3xl"
                  }}
                  href={"https://www.instagram.com/Taino.Musica/"}
                >
                  Instagram
                </Link>
              </Navbar.CollapseItem>
      
            </Navbar.Collapse>

            <Navbar.Toggle aria-label="toggle navigation" />

          </Navbar>
          <Spacer></Spacer>
        <Row justify='center'>
        <Card variant='shadow' css={{ w: "380px", h: "800px", fontFamily: "Genos" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                {/* Artist name goes here */}
                <Text size={24} weight="bold" transform="uppercase" color="#ffffff">
                    Genesis
                </Text>
                {/* Track name goes here */}
                <Text h3 color="white">
                    Taino
                </Text>
            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            <Card.Image
                // NFT Image or animation here
                src="/sound.gif"
                width="100%"
                height="100%"
                objectFit="cover"
                alt="Card example background"
            />
        </Card.Body>
        <Card.Footer
            isBlurred
            css={{
                position: "absolute",
                bgBlur: "#ffffff66",
                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                bottom: 0,
                zIndex: 1,
            }}
        >
            <Row>
                <Col>
                    <AudioPlayer
                        size={60}
                        audioSrc="/genesis.wav"
                        callbackAfterPlay={console.log}
                        active
                    ></AudioPlayer>
                </Col>
                <Col>
                    <Row>
                        <Image src="/decent.png" width={60} height={60} alt="logo" />
                    </Row>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
      </Row>
      </Container>
      {/* </div> */}
    </>
  )
}
