---
title: "A deposit that only pays when the market agrees: range accrual FDs in Tijori"
summary: Range accrual deposits earn their coupon only on days a reference rate closes inside a band. Tijori now checks the index every day and accrues the interest for you.
type: insight
date: 2026-11-04
cover: cover.png
draft: false
---

Banks are offering treasury teams a richer coupon on their deposits, with a catch. A typical term sheet reads: **6.1% p.a., for every day the US 10-Year Treasury closes below 4.8%.** On days it closes at or above 4.8%, the deposit earns nothing.

These are **range accrual** deposits. The headline rate is attractive, but the interest you actually earn depends on a market fixing, one day at a time.

## Why spreadsheets struggle with them

A plain fixed deposit accrues the same amount every day. A range accrual does not. Someone has to:

- look up the index close for every business day,
- decide whether that day was in or out of the range,
- work out the day's accrual, and
- roll it into the month's accrued interest for the books.

Miss a day, use a stale rate or misread the boundary, and the accruals are wrong. Across several deposits, banks and entities, that becomes a monthly reconciliation exercise nobody enjoys.

## How Tijori handles it

**Set it up like any other deposit.** In the usual fixed deposit flow, choose *Range Accrual* as the interest type, pick the reference index and enter the band, the in-range rate and the out-of-range rate. Day count, payment frequency and maturity actions work exactly as they do for any other FD. Tijori shows the index's latest close right on the screen, so you can see where the market sits against your band before you submit.

**Tijori checks the market every day.** Each day it fetches the index close, tests it against the band, and accrues either the in-range rate or the out-of-range rate. It then updates the deposit's accrual schedule and the month's accrued interest.

<img src="/news/fd-range-accrual/daily-accrual-flow.png" alt="Daily range accrual: fetch the closing yield, test it against the band, accrue at 6.1% or zero, then update the accrual schedule and monthly accrued interest" style="max-width: 340px; margin-left: auto; margin-right: auto;" />

**The accounting follows.** Accrued interest and interest income post to the deposit's own GL accounts, and the deposit can be linked to a loan when it backs one.

## A quick worked example

Take USD 1,000,000 at 6.1% on an Actual/360 basis. Each day in range earns 1,000,000 × 6.1% ÷ 360 = **USD 169.44**. In a 30-day month where the index stays below 4.8% on 18 days, the deposit earns 18 × 169.44 = **USD 3,050**, not the USD 5,083 the headline rate suggests. That gap is exactly what treasury needs to see, and forecast, before committing.

One practical tip: check how your term sheet treats a close of *exactly* 4.8%, and set the band to match.

Do you hold structured deposits that are still tracked by hand? [Book a 30-minute demo](/en/company/contact) and we will show you range accruals running on your own terms.
