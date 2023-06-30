# Use the Rust nightly image as the base
FROM rustlang/rust:nightly

# Set the working directory
WORKDIR /app

# Copy the backend files into the container
COPY . .

# Build the project
RUN cargo build --release

# Expose the port your Rocket app is running on
EXPOSE 8000

# Run the Rocket app
CMD ["cargo", "run", "--release"]
