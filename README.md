<div className={styles.mainContainer}>
        <div className={styles.container}>
          {/* <h4>{post.title}</h4>
        <p>{post.content}</p>
        <div className={styles.infoBox}>
        <p>{post.author.name}</p>
        <p>{post.createdAt}</p>
      </div> */}
          <div>
            <p>{index + 1}</p>
          </div>

          <Table striped className={styles.strip}>
            {/* <thead>
            <tr>
            <th>#</th>
            <th>Author</th>
            <th>Title</th>
            <th>Date Posted</th>
            </tr>
          </thead> */}
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>
                  <img src={post.author.photo} alt="" />
                </td>
                <td>{post.author.name}</td>
                {/* <td>{post.title}</td> */}
                <td>
                  <a href={`posts/${post._id}`}>
                    {post.title.length > 30
                      ? post.title.substring(0, 30) + "..."
                      : post.title}
                  </a>
                </td>
                <td>{post.createdAt.substring(0, 10)}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>





      .mainContainer {
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid; */
  width: 100%;
  max-width: 70%;
  /* margin: 0 100px; */
}

tbody {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

td {
  text-align: start;
}

td > img {
  width: 50px;
  border-radius: 50%;
}

td:nth-child(2) {
  text-align: start;
  width: 30px;
}

.strip {
  background-color: #fafafa;

  /* border: 1px solid; */
}
