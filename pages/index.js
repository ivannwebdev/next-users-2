import User from "../components/User"

const Users = ({ users }) => {
  return (
    <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Users list</h3>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {
            users.map(({ name, picture, location, email, gender, phone }, i) =>
              <User
                name={`${name.title} ${name.first}`}
                picture={picture.large}
                thumbnail={picture.thumbnail}
                country={location.country}
                city={location.city}
                phone={phone}
                gender={gender}
                email={email}
                key={email} // ID from response is null sometimes, but email must be unique
                path={`${++i}`}
              />
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default Users

export async function getServerSideProps() {
  const response = await fetch("https://randomuser.me/api/?results=7")

  if (!response.ok) throw new Error("Failed to fetch data")

  const parsedRes = await response.json()
  const users = parsedRes.results

  return {
    props: {
      users
    }
  }
}
