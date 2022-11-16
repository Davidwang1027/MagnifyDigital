import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import FullPageLayout from '../layouts/fullpage_layout';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  terms: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '1.6',
    overflowY: 'auto',
  },
}));

export default function ReleaseNotes() {
  const { i18n } = useTranslation();
  const currentLanguageKey = i18n.language.slice(0, 2);

  if (currentLanguageKey === 'en') {
    return ReleaseNotesEnglish();
  } else {
    return ReleaseNotesFrench();
  }
}

function ReleaseNotesEnglish() {
  const { terms } = useStyles();

  return (
    <FullPageLayout>
      <Container className={terms}>
        <div>
          <h1>ScreenMiner&trade; Release Notes</h1>
          <ul>
            <li>
              <a href="#v1221116en">November 16, 2022</a>
            </li>
            <li>
              <a href="#v1220412en">April 12, 2022</a>
            </li>
            <li>
              <a href="#v1220314en">March 14, 2022</a>
            </li>
          </ul>
          {/* For future reference, Whenever these release notes are updated, people need to modify the 'created_at' properties of the 'staticNotificationsData' variable for file -- apps/client/src/components/notifications/notification_new_update.tsx,
This is done to fix the issue in VIEW-1694*/}
          <div id="v1221116en" />
          <h1>November 16, 2022</h1>
          <p>Hi everyone! We have several updates and fixes that we just released. Here are a few highlights.</p>
          <ul>
            <li>
              Persistent Data - We improved our date handling for chart settings. For users, this means a “Last 30 days chart” always shows
              the most recent 30 days, rather than "getting stuck" on the 30 days prior to saving the configuration.
            </li>
            <li>
              An overhaul of the engagement tab is coming! We will be including data for top performing video content and tracking text and
              image posts soon.
            </li>
            <li>
              We have simplified the viewership page. If your project doesn’t have broadcaster data you will no longer see zeros and empty
              charts.
            </li>
            <li>
              Several bug fixes and stability updates have been made! We are always improving and welcome your feedback and suggestions at{' '}
              <a href="mailto:support@screenminer.com">support@screenminer.com</a>.
            </li>
          </ul>

          <div id="v1220412en" />
          <h1>April 12, 2022</h1>
          <p>
            ScreenMiner version 1.22.0412 offers new capabilities and corrections as outlined below. Please contact{' '}
            <a href="mailto:support@screenminer.com">support@screenminer.com</a> for questions about these items.
          </p>
          <h2>New Features</h2>
          <ul>
            <li>In the Create New Project wizard, "IGTV" has been relabeled "Instagram TV" for clarity.</li>
            <li>
              For clarity and depth of reporting, Funder Reports now include metrics for both Total Views Lifetime and Total Views in Report
              Period along with corresponding charts. Previously submitted reports are being automatically regenerated to include this
              additional content.
            </li>
            <li>
              Instructions for adding a Linked Account have been updated for better clarity and guidance - plus a refresh of the visuals
              because why not?
            </li>
            <li>
              The completion screen shown after adding a linked account wasn't consistent with the ScreenMiner style guide. We've improved
              it for better consistency with the rest of the application.
            </li>
            <li>
              The message shown when a creator removes a media link has been improved. The creator will be informed if there are other
              projects linked to the same account.
            </li>
            <li>
              We've updated the confirmation dialog shown when a creator chooses to remove a linked account. The impact of this action and
              its alternatives has been clarified to ensure fully informed decision making.
            </li>
            <li>When a media link is disconnected, an in-app notification will remind the Creator to relink the account.</li>
            <li>
              Facebook viewership metrics have been switched to 10-second rather than 3-second views. You may notice a change in viewership
              number reported relative to the 1.22.0412 release. This change is retroactive, and historical charts depict 10s viewership
              across all periods for consistency.
            </li>
          </ul>
          <h2>Bug Fixes</h2>
          <ul>
            <li>
              Previously when there are more than one media link of a same type (for example, 2 Facebook media links), the Monthly Views
              didn't include data from all media links of the same type. This issue has been corrected.
            </li>
            <li>
              Creators sometimes bookmark analytics pages inside ScreenMiner rather than the home page. ScreenMiner didn't always deal with
              that gracefully. For example, some of the Viewership Charts might not appear. We improved that scenario and now these charts
              show correct data whether you start from a bookmark on the home page or inside the application.
            </li>
            <li>
              Previously when a funder clicked "CONFIGURE PROJECT", the project name was not shown in Configure Project tab. It's been
              added, so there's always a reminder of which project you are looking at.
            </li>
          </ul>

          <div id="v1220314en" />
          <h1>March 14, 2022</h1>
          <p>
            ScreenMiner version 1.22.0314 offers new capabilities and corrections as outlined below. Please contact{' '}
            <a href="mailto:support@screenminer.com">support@screenminer.com</a> for questions about these items.
          </p>
          <h2>New Features</h2>
          <ul>
            <li>
              The Funders' Audience Index snapshot view, now supports visualization by Total fund contribution or Total marketing budget.
            </li>
            <li>
              Moved key Project Viewership numbers above the Benchmark Filter select for immediate visibility and better user experience.
            </li>
            <li>
              For Funders, in the ANALYZE -&gt; Viewership tab under the Benchmark Filter section and next to "Only show certain Fund
              projects" checkbox, the label of "Select Projects" drop-down is updated to "Select Projects to exclude" to be
              self-descriptive.
            </li>
            <li>
              Titles for Facebook / Twitter / Instagram Engagement charts now make clear that they include only "Posts Containing Videos".
            </li>
            <li>
              The button for Funders to remove report requirements they no longer need is now labeled as Delete Reporting Requirement.
            </li>
          </ul>
          <h2>Bug Fixes</h2>
          <ul>
            <li>Funders will no longer see the "Remove connection" button for Linked Accounts.</li>
            <li>
              Fixed the false alarm that some media links were incorrectly reported as disconnected when initially linked, while they were
              actually connected and pulling data correctly.
            </li>
            <li>
              Previously, Benchmark Averages were not updated when more than one option was selected in the One-off or Series drop-down.
              This has been corrected.
            </li>
          </ul>
        </div>
      </Container>
    </FullPageLayout>
  );
}

function ReleaseNotesFrench() {
  const { terms } = useStyles();

  return (
    <FullPageLayout>
      <Container className={terms}>
        <div>
          <h1>
            Avis - Mises à jour de ScreenMiner<sup>MD</sup>
          </h1>
          <ul>
            <li>
              <a href="#v1220412fr">12 avril 2022</a>
            </li>
            <li>
              <a href="#v1220314fr">14 mars 2022</a>
            </li>
            <li>
              <a href="#v1221116fr">16 novembre 2022</a>
            </li>
          </ul>

          <div id="v1221116fr" />
          <h1>16 novembre, 2022</h1>
          <p>
            Bonjour à tous! Nous venons d’effectuer plusieurs mises à jour et améliorations. Voici quelques éléments importants concernant
            ces changements.
          </p>
          <ul>
            <li>
              Données constantes – Nous avons amélioré la gestion des dates pour la configuration des graphiques. Pour les utilisateurs,
              cela signifie qu’un graphique réglé sur «les 30 derniers jours» affiche toujours les 30 derniers jours, plutôt que de rester
              figé sur les 30 jours précédant l’enregistrement du réglage.
            </li>
            <li>
              Une refonte de l’onglet «engagement» est à venir! Nous inclurons bientôt des données sur les contenus vidéo les plus
              performants et nous assurerons le suivi des publications de texte et d’images.
            </li>
            <li>
              Nous avons simplifié la page de visualisation de l’auditoire. Si votre projet ne dispose pas de données de diffuseur, vous ne
              verrez plus de zéro et de graphiques vides.
            </li>
            <li>
              Plusieurs corrections de bogues et mises à jour de stabilité de produit ont été effectuées! Nous nous améliorons
              continuellement et nous souhaitons recevoir vos commentaires et suggestions à l’adresse{' '}
              <a href="mailto:support@screenminer.com">support@screenminer.com</a>.
            </li>
          </ul>

          <div id="v1220412fr" />
          <h1>avril 12, 2022</h1>
          <p>
            ScreenMiner version 1.22.0412 offre de nouvelles fonctionnalités et des corrections comme indiquées ci-dessous. Veuillez
            contacter <a href="mailto:support@screenminer.com">support@screenminer.com</a> si vous avez des questions sur ces éléments.
          </p>
          <h2>Nouvelles fonctionnalités</h2>
          <ul>
            <li>Dans l'assistant Créer un nouveau projet, « IGTV » a été renommé « Instagram TV » pour plus de clarté.</li>
            <li>
              Pour plus de clarté et de signification dans les rapports, les rapports des bailleurs de fonds incluent désormais des mesures
              pour le nombre total de visionnements depuis le début et le nombre total de visionnements pendant la période du rapport, ainsi
              que des graphiques correspondants. Les rapports précédemment soumis ont été automatiquement régénérés pour inclure ce contenu
              supplémentaire.
            </li>
            <li>
              Les instructions pour l'ajout d'un compte associé ont été mises à jour pour plus de facilité et donnent des indications - de
              plus, pourquoi ne pas en profiter pour optimiser le visuel ?
            </li>
            <li>
              L'écran final affiché après l'ajout d'un compte associé n'était pas cohérent avec le guide visuel de styles de ScreenMiner.
              Nous l'avons amélioré pour plus de cohérence avec le reste de l'application.
            </li>
            <li>
              Le message qui s'affiche lorsqu'un utilisateur supprime un lien média a été amélioré. L'utilisateur sera informé s'il existe
              d'autres projets associés au même compte.
            </li>
            <li>
              Nous avons mis à jour la boîte de dialogue de confirmation qui s'affiche lorsqu'un utilisateur choisit de supprimer un compte
              associé. L'impact de cette action et de ses conséquences a été clarifié pour garantir une prise de décision pleinement
              éclairée.
            </li>
            <li>
              Lorsqu'un lien média est déconnecté, un avis intégré à l'application rappellera à l'utilisateur de réassocier le compte.
            </li>
            <li>
              Les mesures de l'auditoire de Facebook sont passées à des visionnements de 10 secondes plutôt que de 3 secondes. Vous
              remarquerez peut-être un changement dans le nombre de visionnements affichés par rapport à la version 1.22.0412. Ce changement
              est rétroactif et l'historique des graphiques expose un auditoire de 10 secondes pour toutes les périodes pour plus de
              cohérence.
            </li>
          </ul>
          <h2>Corrections des bogues</h2>
          <ul>
            <li>
              Auparavant, lorsqu'il y avait plus d'un lien média du même type (par exemple, 2 liens médias Facebook), les visionnements
              mensuels n'incluaient pas le total des données de tous les liens médias du même type. Ce problème a été corrigé.
            </li>
            <li>
              Les utilisateurs mettent parfois en signet des pages d'analyse de ScreenMiner plutôt que la page d'accueil. ScreenMiner ne
              générait pas toujours cela avec élégance. Par exemple, certains graphiques de l'auditoire pouvaient ne pas s'afficher. Nous
              avons amélioré cette situation et dorénavant les graphiques affichent les données correctement, que vous commenciez à partir
              d'un signet sur la page d'accueil ou à l'intérieur de l'application.
            </li>
            <li>
              Auparavant, lorsqu'un bailleur de fonds cliquait sur « CONFIGURER LE PROJET », le nom du projet n'apparaissait pas dans
              l'onglet Configurer le projet. Il a été ajouté, de sorte qu'il y a toujours un rappel du projet que vous examinez.
            </li>
          </ul>

          <div id="v1220314fr"></div>
          <h1>14 mars 2022</h1>

          <p>
            ScreenMiner version 1.22.0314 offre de nouvelles fonctionnalités et des corrections comme indiquées ci-dessous. Veuillez
            contacter <a href="mailto:support@screenminer.com">support@screenminer.com</a> si vous avez des questions sur ces éléments.
          </p>
          <h2>Nouvelles fonctionnalités</h2>

          <ul>
            <li>
              La vue instantanée de l'indice des auditoires des bailleurs de fonds offre désormais une visualisation par la contribution
              totale du fonds ou le total du budget en marketing.
            </li>
            <li>
              Le déplacement des nombres de visionnements clés d'un projet est au-dessus de la barre de sélection des filtres de référence
              pour une visibilité immédiate et une meilleure expérience utilisateur.
            </li>
            <li>
              Dans l'onglet ANALYSER -&gt; Auditoires sous la section Filtres de référence et à côté de la case à cocher « Afficher
              uniquement les projets du fonds », l'étiquette de la liste déroulante « Sélectionner les projets » a été mise à jour par «
              Sélectionner les projets à exclure » pour être plus intuitive pour les bailleurs de fonds.
            </li>
            <li>
              Les titres des graphiques dans la section Engagement Facebook/Twitter/Instagram indiquent désormais clairement qu'ils
              n'incluent que les « Publications contenant des vidéos ».
            </li>
            <li>
              Le bouton permettant aux bailleurs de fonds de supprimer les exigences de rapport dont ils n'ont plus besoin est désormais
              intitulé « Supprimer l'exigence de rapport ».
            </li>
          </ul>

          <h2>Corrections des bogues</h2>

          <ul>
            <li>Les bailleurs de fonds ne verront plus le bouton « Supprimer la connexion » pour les comptes associés.</li>
            <li>
              La fausse alarme, selon laquelle certains liens multimédias étaient incorrectement signalés comme étant déconnectés lors de la
              connexion initiale, alors qu'ils étaient en fait connectés et extrayaient correctement les données, a été corrigée.
            </li>
            <li>
              Auparavant, les moyennes de référence n'étaient pas mises à jour lorsque plusieurs options étaient sélectionnées dans la liste
              déroulante Émission unique ou Série. Cela a été corrigé.
            </li>
          </ul>
        </div>
      </Container>
    </FullPageLayout>
  );
}
