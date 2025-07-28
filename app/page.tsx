"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Award,
  Trophy,
  Code,
  Download,
  ArrowRight,
} from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                "About",
                "Projects",
                "Certifications",
                "Achievements",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-600 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300 transform hover:scale-105 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-gradient-x"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-orange-600/30 rounded-full blur-3xl animate-float-delayed"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-12 animate-bounce-slow">
              <span className="text-4xl font-bold text-white">PK</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 animate-fade-in-up">
              Prashant Kumar
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto animate-fade-in-up-delayed">
              Full Stack Developer & UI/UX Designer passionate about creating
              innovative digital experiences
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up-delayed-2">
              {["React", "Node.js", "JavaScript", "Express.js", "C++"].map(
                (skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 transform hover:scale-110 transition-all duration-300 hover:shadow-lg border-0 animate-fade-in-scale"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                )
              )}
            </div>
            <div className="flex justify-center gap-4 animate-fade-in-up-delayed-3">
              {/* <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              > */}
              <a
                href="/resume_.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-md shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download Resume
                {/* <ArrowRight className="w-4 h-4" /> */}
              </a>
              {/* </Button> */}
              {/* <Button
                variant="outline"
                size="lg"
                className="gap-2 bg-transparent hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 border-2 border-gradient-to-r hover:border-blue-300 transform hover:scale-105 transition-all duration-300"
              > */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-black font-medium rounded-md hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              {/* </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 relative"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              Projects
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-fade-in-up-delayed">
              These projects represent the depth of my experience, technical
              skills, and the passion I bring to solving real-world problems
              through code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white to-blue-50/50 border-0 shadow-lg animate-fade-in-scale">
              <div
                className="aspect-video rounded-t-lg relative overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: "url('/newsApp.png')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-400/20 to-purple-600/20"></div> */}
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between group-hover:text-blue-600 transition-colors duration-300">
                  NexNews
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-blue-100 hover:text-blue-600"
                      onClick={() =>
                        window.open(
                          "https://github.com/PrashantKumar9786/NewsApp",
                          "_blank"
                        )
                      }
                    >
                      <Github className="w-4 h-4" />
                      {/* </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-purple-100 hover:text-purple-600"
                      onClick={() =>
                        window.open(
                          "https://github.com/PrashantKumar9786/NewsApp",
                          "_blank"
                        )
                      }
                    > */}
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription className="group-hover:text-slate-700 transition-colors duration-300">
                  Real-time news app using React and NewsAPI, featuring category
                  filters and responsive design.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "JavaScript", "CSS", "NewsAPI"].map(
                    (tech, index) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 hover:border-blue-300 transition-all duration-300 transform hover:scale-105"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {tech}
                      </Badge>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white to-green-50/50 border-0 shadow-lg animate-fade-in-scale"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src="https://research.fhstp.ac.at/var/site/storage/images/_aliases/content_third/5/6/3/7/1927365-1-ger-DE/2.jpg"
                alt="NexNews Preview"
                className="aspect-video object-cover w-full rounded-t-lg"
              />
              <CardHeader>
                <CardTitle className="flex items-center justify-between group-hover:text-green-600 transition-colors duration-300">
                  FictoCheck
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-green-100 hover:text-green-600"
                      onClick={() =>
                        window.open(
                          "https://github.com/PrashantKumar9786/FictoCheck",
                          "_blank"
                        )
                      }
                    >
                      <Github className="w-4 h-4" />
                      {/* </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-teal-100 hover:text-teal-600"
                      onClick={() =>
                        window.open(
                          "https://github.com/PrashantKumar9786/NewsApp",
                          "_blank"
                        )
                      }
                    > */}
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription className="group-hover:text-slate-700 transition-colors duration-300">
                  Python-based fake news detection tool leveraging NLP and ML
                  models for accurate real-vs-fake classification.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "Natural Language Processing (NLP)",
                    "Scikit-learn",
                    "Machine Learning",
                  ].map((tech, index) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="hover:bg-gradient-to-r hover:from-green-100 hover:to-teal-100 hover:border-green-300 transition-all duration-300 transform hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white to-orange-50/50 border-0 shadow-lg animate-fade-in-scale"
              style={{ animationDelay: "0.4s" }}
            >
              <img
                src="https://play-lh.googleusercontent.com/9cStI0kHWmjALUEVwZwkuPhkwtuesVwSgQeHUA4YEqGRzF31yXYjjdpAQkW5DGqp2dE"
                alt="NexNews Preview"
                className="aspect-video object-cover w-full rounded-t-lg"
              />
              <CardHeader>
                <CardTitle className="flex items-center justify-between group-hover:text-orange-600 transition-colors duration-300">
                  ResumeNest
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-orange-100 hover:text-orange-600"
                      onClick={() =>
                        window.open(
                          "https://free-resume-eosin.vercel.app/",
                          "_blank"
                        )
                      }
                    >
                      <Github className="w-4 h-4" />
                      {/* </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-red-100 hover:text-red-600"
                      onClick={() =>
                        window.open(
                          "https://github.com/PrashantKumar9786/NewsApp",
                          "_blank"
                        )
                      }
                    > */}
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription className="group-hover:text-slate-700 transition-colors duration-300">
                  Responsive resume builder built in React with TailwindCSS,
                  enabling users to create and download polished resumes as
                  PDFs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Tailwind CSS", "jsPDF", "html2canvas"].map(
                    (tech, index) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100 hover:border-orange-300 transition-all duration-300 transform hover:scale-105"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {tech}
                      </Badge>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-100/20 to-blue-100/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-900 to-blue-900 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              Certifications
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-fade-in-up-delayed">
              Earned certifications from recognized platforms, showcasing
              verified knowledge and technical competence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Certification 1 */}
            <Card className="text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 bg-gradient-to-br from-white to-blue-50/50 border-0 shadow-lg animate-fade-in-scale">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">
                  Transformer-Based Natural Language Processing
                </CardTitle>
                <CardDescription className="group-hover:text-slate-700 transition-colors duration-300">
                  NVIDIA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Issued: April 2025
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:border-blue-300 transform hover:scale-105 transition-all duration-300 bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1gzy_5unK-d6u6hdQZcfgRu9aDkGW_GJ3/view",
                      "_blank"
                    )
                  }
                >
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            {/* Certification 2 */}
            <Card
              className="text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 bg-gradient-to-br from-white to-green-50/50 border-0 shadow-lg animate-fade-in-scale"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="group-hover:text-green-600 transition-colors duration-300">
                  160 Days of Problem Solving
                </CardTitle>
                <CardDescription className="group-hover:text-slate-700 transition-colors duration-300">
                  GeeksforGeeks (GFG)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">Issued: May 2025</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:border-green-300 transform hover:scale-105 transition-all duration-300 bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1gqgCxX8TtIwmFAQ3kZMofKXN4-I5KBdy/view",
                      "_blank"
                    )
                  }
                >
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            {/* Certification 3 */}
            <Card
              className="text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 bg-gradient-to-br from-white to-purple-50/50 border-0 shadow-lg animate-fade-in-scale"
              style={{ animationDelay: "0.4s" }}
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="group-hover:text-purple-600 transition-colors duration-300">
                  Software Engineering Virtual Experience
                </CardTitle>
                <CardDescription className="group-hover:text-slate-700 transition-colors duration-300">
                  JPMorgan Chase & Co. (via Forage)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  {" "}
                  Issued: June 2025
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 hover:border-purple-300 transform hover:scale-105 transition-all duration-300 bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/14V5LKCDYk8XOk4odFOTrXRFjIkgsVwkq/view",
                      "_blank"
                    )
                  }
                >
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-yellow-50/30 to-orange-50/30 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/10 to-orange-100/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              Achievements
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-fade-in-up-delayed">
              Recognized milestones that demonstrate both skill mastery and
              impact across domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Achievement 1 */}
            <Card className="text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 bg-gradient-to-br from-white to-yellow-50/50 border-0 shadow-lg animate-fade-in-scale">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-pulse-slow">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="group-hover:text-yellow-600 transition-colors duration-300">
                  Hackerrank
                </CardTitle>
                <CardDescription className="group-hover:text-slate-700 transition-colors duration-300"></CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                  5 Star C++ Programming
                </p>
              </CardContent>
            </Card>

            {/* Achievement 2 */}
            <a
              href="https://www.geeksforgeeks.org/user/prashant9793/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                className="text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 bg-gradient-to-br from-white to-blue-50/50 border-0 shadow-lg animate-fade-in-scale"
                style={{ animationDelay: "0.3s" }}
              >
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-pulse-slow">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">
                    GeeksForGeeks
                  </CardTitle>
                  <CardDescription className="group-hover:text-slate-700 transition-colors duration-300"></CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                    Ranked 204th in the Institute on GeeksForGeeks with a track
                    record of solving 300+ problems with a coding score of 700+.
                  </p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-stars opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto animate-fade-in-up-delayed">
            I'm always interested in new opportunities and exciting projects.
            Let's connect!
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in-up-delayed-2">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              onClick={() =>
                window.open("mailto:prashantkushwah913@gmail.com", "_blank")
              }
            >
              <Mail className="w-5 h-5" />
              Prashantkushwah913@gmail.com
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/prashant-kumar-87a909211/",
                  "_blank"
                )
              }
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              onClick={() =>
                window.open("https://github.com/PrashantKumar9786", "_blank")
              }
            >
              <Github className="w-5 h-5" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Prashant Kumar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
