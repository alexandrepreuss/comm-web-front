import React from 'react'
import { Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Comments = () => {
  const comments = [
    {
      userId: 'user1',
      rate: 3,
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      userId: 'user2',
      rate: 1,
      comment:
        'Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer quis tortor ut erat vestibulum cursus id eu est. Pellentesque feugiat vitae nunc ac fermentum.',
    },
    {
      userId: 'user3',
      rate: 5,
      comment:
        'Maecenas vulputate nibh ornare felis facilisis, a ullamcorper leo gravida. Vivamus cursus neque varius ante eleifend finibus in et augue.',
    },
    {
      userId: 'user4',
      rate: 3,
      comment:
        'Maecenas vulputate nibh ornare felis facilisis, a ullamcorper leo gravida. Vivamus cursus neque varius ante eleifend finibus in et augue.',
    },
    {
      userId: 'user5',
      rate: 4,
      comment:
        'Maecenas vulputate nibh ornare felis facilisis, a ullamcorper leo gravida. Vivamus cursus neque varius ante eleifend finibus in et augue.',
    },
  ]

  const firstComments = comments.slice(0, 3)

  return (
    <Container>
      <section className="mt-5 pl-6">
        <div className="ml-4">
          <h3 style={{ marginLeft: '26px' }} className="mb-2">
            Veja o que os outros usuários estão falando:
          </h3>
          <ul>
            {firstComments.map(c => (
              <Card className="mb-2">
                <Card.Body>
                  <p>{c.userId}</p>
                  <p>{c.rate}</p>
                  <p>{c.comment}</p>
                </Card.Body>
              </Card>
            ))}
          </ul>
          <Link to="/comments">
            <a href="#">Ver todos os comentários</a>
          </Link>
        </div>
      </section>
    </Container>
  )
}

export default Comments
