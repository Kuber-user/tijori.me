---
title: "Host-to-Host, API or SWIFT? Bank statement connectivity, explained simply"
summary: Three ways to get bank statements into your treasury system automatically, what each bank will ask you for, and how to choose the right mix.
type: insight
date: 2026-11-10
cover: cover.png
draft: false
---

Every treasury dashboard depends on one unglamorous thing: yesterday's bank statement arriving on its own, every morning, without someone logging in to a bank portal to download it.

There are three common ways to make that happen. None of them is the "right" one. Each suits different banks, budgets and timelines, and most treasury teams end up using more than one. Here is how each works in practice, including the parts nobody mentions until the bank's onboarding form lands in your inbox.

## 1. Host-to-Host: a direct line to your bank

With Host-to-Host (H2H), your bank places statement files, usually MT940 or camt.053, on a secure file server. Your treasury system collects them on a schedule over SFTP.

<img src="/news/bank-statement-connectivity/h2h-flow.svg" alt="Host-to-Host flow: the bank generates the statement, drops it on its SFTP server, the treasury system connects from a whitelisted IP using its key, archives each file once and loads it" style="max-width: 420px; margin-left: auto; margin-right: auto;" />

The idea is simple. The setup is where the work is. Expect the bank to ask for three things.

**Your IP addresses, to whitelist.** Banks only accept connections from addresses they know. During development that is usually your office IP, so your team can reach the bank's API portal or test server. For production, it is the IP of the server your treasury system runs on.

**A key from your treasury system's server.** Your treasury system generates a key pair on its server and you share the public half with the bank. Each time the system connects to fetch statements, it proves who it is with that key. Banks often call this "the certificate". Some banks also encrypt the files themselves, which means one more set of keys to exchange.

**A decision on file names.** This sounds trivial. It isn't. Some banks give every day's statement the same file name, so today's file replaces yesterday's. Others add a date and time stamp to each file. Your treasury system has to cope with both: pick up each file exactly once, archive it, and never load the same statement twice or miss one that was overwritten.

Once it is live, H2H is dependable. But every bank is its own small project, with its own forms, testing and sign-offs.

## 2. Bank APIs: ask for the statement when you need it

More and more banks now offer APIs. Instead of waiting for a file to appear, your treasury system asks the bank for a statement, typically an MT940 for a given account and date.

Most banks don't hand the statement back in the same call. It takes them a little time to generate it, so the flow usually has two steps.

<img src="/news/bank-statement-connectivity/api-flow.svg" alt="API flow: the treasury system sends a signed statement request, the bank accepts it, then either calls the treasury system back on its callback URL or the treasury system makes a second call after a set time to collect the statement" style="max-width: 420px; margin-left: auto; margin-right: auto;" />

Either the bank asks you for a **callback URL** and calls you back when the statement is ready, or your system **waits a set time and makes a second call** to collect it.

The part that needs care is security. Some banks require every API request to be **digitally signed**, so they can be sure it came from you and was not changed on the way. Your treasury system has to look after the signing keys and sign each request in exactly the format that bank expects. Every bank's API is a little different too, so this is still bank-by-bank work, just with more control over when you get your data.

## 3. SWIFT: one connection, many banks

This is everyone's favourite these days, and it is easy to see why. Instead of building a connection to each bank, you use the network banks already use to talk to each other.

<img src="/news/bank-statement-connectivity/swift-flow.svg" alt="SWIFT flow: banks send statements over SWIFT to a BIC8 address, the provider matches each statement by sending bank BIC and account number, moves it to the company's own folder, and a scheduled job loads it into the treasury system" style="max-width: 420px; margin-left: auto; margin-right: auto;" />

Here is how it works:

1. **You get a BIC code on SWIFT.** It can be your own, or one your treasury system provider rents you, so you don't need your own SWIFT membership.
2. **You do the paperwork with each bank**, asking it to send your account statements to that BIC8 address.
3. **The statements arrive and get sorted.** The provider matches each one by the sending bank's BIC and your account number, and moves it to a folder set aside for your company.
4. **Scheduled jobs load them** into your treasury system.

**What does it cost?** Banks typically charge somewhere between **USD 40 and 60 per account per month** to send statements over SWIFT. But if more than ten years of treasury consulting has taught us anything, it is that the fee on paper is where the conversation starts. Every bank wants your business, and good volumes earn good discounts. Ask.

The technology is set up once. After that, adding a bank is mostly a letter and a form, not an IT project.

## So which one should you choose?

A simple way to think about it:

- **Host-to-Host** suits a few main banks that already run mature H2H services. Plan for a small IT project per bank.
- **API** suits banks with strong APIs, when you want to pull statements on demand. Also a project per bank, with request signing to handle.
- **SWIFT** suits companies with many banks, often across countries. A one-time setup, then mostly paperwork per bank, plus a monthly fee per account that you can negotiate.

In practice, most companies mix them: SWIFT for the long list of banks, and H2H or API for the one or two banks that carry most of the volume.

Not sure which mix fits your banks? Tijori TMS helps you choose the right option for each bank and gets you live with full bank visibility within weeks of implementation. [Talk to us](/en/company/contact).
