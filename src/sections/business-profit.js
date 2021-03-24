/** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui';
import TextFeature from 'components/text-feature';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import DrawingArrow from 'assets/drawing-arrow.svg';

const data = {
  title:
    'We help you to boost your business profitable with our talent marketer',
  description:
    'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
  btnName: 'Explore Details',
  btnURL: '#',
  points: [
    {
      icon: <IoIosCheckmarkCircle />,
      text: 'Unlimited design possibility',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      text: 'Completely responsive features',
    },
  ],
};

export default function BusinessProfit() {
  // Graphql image query
  const dataThumb = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "business-profit.png" }) {
        childImageSharp {
          fluid(maxWidth: 685) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section sx={{ variant: 'section.profit' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Img fluid={dataThumb.placeholderImage.childImageSharp.fluid} />
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
            points={data.points}
          />
        </Box>
      </Container>
      <Box sx={styles.bottomArrow}>
        <Image src={DrawingArrow} alt="Arrow" />
      </Box>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['flex-Start', null, null, 'space-between'],
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, null, null, null, null, null, null, 8],
  },
  thumbnail: {
    pr: [2, null, 7, 4, 7, 8, null, 10],
    pl: [0, null, 7, 0],
    display: 'flex',
    order: [2, null, null, 0],
    mx: ['auto', 0],
    width: [328, '100%', null, null, 560, 690, 805],
    img: {
      ml: [0, null, null, -3],
      height: [265, 'auto'],
    },
  },
  contentBox: {
    flexShrink: 0,
    textAlign: ['center', null, null, 'left'],
    width: ['100%', null, null, 350, 400, '470px'],
    pb: [7, null, null, 0],
    '.btn__link': {
      mt: [4, null, 5],
    },
  },
  bottomArrow: {
    position: 'absolute',
    bottom: -185,
    left: '33%',
    display: ['none', null, null, null, null, null, null, 'block'],
  },
};
