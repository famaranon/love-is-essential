import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-petition',
  templateUrl: './petition.component.html',
  styleUrls: ['./petition.component.scss']
})
export class PetitionComponent implements OnInit {

  public sections = [
    {
      title: 'There is precedent',
      description: 'Denmark has already begun allowing those with long term girlfriends/boyfriends into Denmark, no matter the country of origin, provided they have a negative coronavirus test taken < 3 days before arrival, by June 27th.\n\nThis should be an EU-wide policy, especially given the Commission\'s seeming desire to have standardization in entry procedures and exemptions. If the test is not enough to guarantee safety (as one could of course be infected within those 3 days), countries could mandate a 14-day (or truly even longer) quarantine, as we\'re sure testing within airports is not able to ramp up this quickly.'
    },
    {
      title: 'There is demand',
      description: 'We are left in the dark if we are heard and if the Commission even has this community of separated couples and families on its radar, but we want you to know that it is a large community. This Change.org petition already has 3000+ signees and has been explicitly supported by a members of the EU Parliament.\n\nThere is a huge petition addressed towards Horst Seehofer (Minister of the Interior of Germany) called Einreisebeschränkungen für binationale Paare und Familien unbürokratisch aufheben! with more than 7.500 supporters.\n\nAnd another petition #LiftTheTravelBan on EU/UK entering the US addressed at the U.S. leaders (Donald Trump et al) also including couples with one partner in the EU and growing significantly.'
    },
    {
      title: 'There are reliable and easily implementable solutions',
      description: 'Introduction of self-quarantine (of 14 days or longer), self-paid COVID-19 tests, self-declaration, etc.!\n\nWe would do almost everything for the possibility to be with our beloved ones again!'
    },
    {
      title: 'There needs to be clarification',
      description: 'There is this thread of over 3000 comments (and 2 more preceding it) as well as countless online forums devoted to trying to understand current restrictions. We understand it is a difficult feat, but we individuals should not be forced to rely on each other to analyze and understand at the most basic level the regulations provided to us by the government. There is currently no clarity or unity among EU states with regards to several issues:\n\n- Whether or not border restrictions refer to country of origin (i.e. where your flight came from) or country of citizenship: for example, if one were to go from the US to the UK and quarantine for 15 days, it is currently not clear across member states and even within member states if they would then be allowed to travel to an EU state\n\n- How to prove to airlines that one has permission to fly: there have been countless reports and anecdotes of individuals who were told they would be able to enter a country with specified documentation but were turned away from the airline. This should not happen.\n\n- Why no countries besides Denmark have clarified the term \'durable relationship\', as referenced in Article 3.2b of the commission\'s own released restrictions: there is no clarity in many states besides Denmark of what \'durable relationship\' is defined by. For example, in Sweden, the border controls website states that one can potentially prove a cohabiting partnership with a marriage certificate, previous rental agreement, etc. but that these are not a guarantee. It is the responsibility of the EU Commission to clarify and make sure each member state actually understands its restrictions.'
    },
    {
      title: 'Love is not tourism',
      description: 'In a world, where half the world is going on vacation again (which they more than deserve!), please don\'t forget about us couples. In relation to vacationers, we would be even more cautious to not spread the virus, be mindful and do everything needed!'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}