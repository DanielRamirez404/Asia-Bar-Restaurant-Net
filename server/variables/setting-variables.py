import os

def generate_env_file():
    username = input("Enter MySQL username: ")
    password = input("Enter MySQL password: ") 

    try:
        with open(".env", "w") as f:
            f.write(f"MYSQL_HOST = \"localhost\"\n")
            f.write(f"MYSQL_USER = \"{username}\"\n")
            f.write(f"MYSQL_PASSWORD = \"{password}\"\n")
            f.write(f"MYSQL_DATABASE = \"AsiaBarRestaurant\"")

        print(".env file created successfully.")

    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    generate_env_file()