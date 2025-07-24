import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section className="flex-1 bg-gray-100 py-20">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to MySite
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Build your next project faster with this clean and simple starter.
        </p>
        <a
          href="#" 
        >
          <Button className="bg-blue-800 rounded-lg text-lg">
            Get Started
          </Button>
        </a>
      </div>
    </section>
  )
}

