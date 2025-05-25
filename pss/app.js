// app.js
//Lesson 12
//Passport JS
// import express from "express";
// import session from "express-session";
// import passport from "passport";
// import { Strategy as LocalStrategy } from "passport-local";
// import bodyParser from "body-parser";
// import { findUser, validatePassword } from "./user.js";

// const app = express();
// const PORT = 3001;

// // ✅ Body parser and session setup
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(session({
//     secret: "passport-secret",
//     resave: false,
//     saveUninitialized: false
// }));

// // ✅ Initialize passport and session
// app.use(passport.initialize());
// app.use(passport.session());

// // ✅ Configure local strategy
// passport.use(new LocalStrategy((username, password, done) => {
//     const user = findUser(username);
//     if (!user) return done(null, false, { message: "User not found" });
//     if (!validatePassword(user, password)) return done(null, false, { message: "Wrong password" });
//     return done(null, user);
// }));

// // ✅ Serialize and deserialize session
// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//     const user = findUser("bharath"); // normally, fetch from DB using ID
//     done(null, user);
// });

// // ✅ Routes

// app.get("/", (req, res) => {
//     res.send("Home Page");
// });

// app.get("/login", (req, res) => {
//     res.send(`
//         <form method="post" action="/login">
//             <input name="username" placeholder="Username" /><br/>
//             <input type="password" name="password" placeholder="Password" /><br/>
//             <button type="submit">Login</button>
//         </form>
//     `);
// });

// // ✅ Login handler
// app.post("/login", passport.authenticate("local", {
//     successRedirect: "/dashboard",
//     failureRedirect: "/login"
// }));

// // ✅ Protected Route
// app.get("/dashboard", (req, res) => {
//     if (req.isAuthenticated()) {
//         res.send(`Welcome ${req.user.username}! <a href="/logout">Logout</a>`);
//     } else {
//         res.redirect("/login");
//     }
// });

// // ✅ Logout
// app.get("/logout", (req, res) => {
//     req.logout(() => {
//         res.redirect("/");
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });


//With Google auth
import express from "express";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import { Strategy as GitHubStrategy } from "passport-github2";

dotenv.config();
const app = express();
const PORT = 3000;

// 🔐 Session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

// 🔐 Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// 🔁 Serialize & deserialize user
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});

// 🔗 Google OAuth Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

// 🔗 GitHub OAuth Strategy
// passport.use(new GitHubStrategy({
//     clientID: process.env.GITHUB_CLIENT_ID,
//     clientSecret: process.env.GITHUB_CLIENT_SECRET,
//     callbackURL: "/auth/github/callback"
// }, (accessToken, refreshToken, profile, done) => {
//     return done(null, profile);
// }));

// 📢 Routes
app.get("/", (req, res) => {
    res.send(`
        <h1>OAuth Login</h1>
        <a href="/auth/google">Login with Google</a><br>
        
    `);
});

// 🔐 Google login routes
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
app.get("/auth/google/callback",
    passport.authenticate("google", {
        successRedirect: "/dashboard",
        failureRedirect: "/"
    })
);

// 🔐 GitHub login routes
// app.get("/auth/github", passport.authenticate("github", { scope: ["user:email"] }));
// app.get("/auth/github/callback",
//     passport.authenticate("github", {
//         successRedirect: "/dashboard",
//         failureRedirect: "/"
//     })
// );

// 👤 Protected Route
app.get("/dashboard", (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/");
    }
    res.send(`
        <h1>Welcome, ${req.user.displayName || req.user.username}!</h1>
        <img src="${req.user.photos?.[0]?.value}" width="100"/>
        <br><a href="/logout">Logout</a>
    `);
});

// 🚪 Logout
app.get("/logout", (req, res) => {
    req.logout(() => {
        res.redirect("/");
    });
});

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
