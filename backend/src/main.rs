#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;

mod api;
mod models;

fn main() {
    rocket::ignite()
        .mount("/", routes![
            api::metamask::connect, 
            api::ledger_live::connect
        ])
        .launch();
}
