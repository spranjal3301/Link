import axios from "axios"


export const sendDM = async (
    userId: string,
    recieverId: string,
    prompt: string,
    token: string
  ) => {
    console.log('sending message')
    return await axios.post(
      `${process.env.INSTAGRAM_BASE_URL}/v21.0/${userId}/messages`,
      {
        recipient: {
          id: recieverId,
        },
        message: {
          text: prompt,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )
}

export const sendPrivateMessage = async (
  userId: string,
  recieverId: string,
  prompt: string,
  token: string
) => {
  console.log('sending message')
  return await axios.post(
    `${process.env.INSTAGRAM_BASE_URL}/${userId}/messages`,
    {
      recipient: {
        comment_id: recieverId,
      },
      message: {
        text: prompt,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  )
}

