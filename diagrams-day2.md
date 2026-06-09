# Day 2 Diagrams — GitHub and Branches

## Diagram 1: Laptop <-> GitHub

```
        YOUR LAPTOP                        GITHUB (cloud)
        -----------                        --------------
        [ local repo ]  ---push--------->  [ remote repo ]
        [ local repo ]  <--pull----------  [ remote repo ]
                                           [ remote repo ]  ---clone---> [ new laptop ]
```

- push   = send your commits up to GitHub
- pull   = download new commits from GitHub to your machine
- clone  = first-time full download of a repo you don't have yet


## Diagram 2: Branch off main and merge back

```
main:     A -------- B -------- C -------------------- F (merge commit)
                                 \                    /
feature:                          D ------ E ---------
```

- A B C  = commits already on main (untouched while you work)
- D E    = your new work on the feature branch
- F      = merge commit — brings feature work into main
- main is always safe and working while the branch is in progress
```
